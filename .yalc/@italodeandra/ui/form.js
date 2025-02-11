import { proxy, ref, useSnapshot } from "valtio";
import { useCallback } from "react";
import { cloneDeep, get, isNil, merge, set, unset } from "lodash-es";
import { useUnmount } from "react-use";
export function createFormState(options) {
    const defaultValues = cloneDeep(options.defaultValues);
    const valuesState = proxy(defaultValues);
    const errorsState = proxy({});
    const formState = proxy({
        options,
        values: valuesState,
        setValue(name, value) {
            unset(errorsState, name);
            set(valuesState, name, value);
        },
        errors: errorsState,
        registeredFields: ref({
            value: [],
        }),
        reset(values) {
            const update = merge(cloneDeep(defaultValues), cloneDeep(values));
            for (const key in formState.values) {
                delete formState.values[key];
            }
            for (const key in update) {
                const typedKey = key;
                formState.setValue(typedKey, update[key]);
            }
        },
    });
    return formState;
}
// noinspection JSUnusedGlobalSymbols
export function useForm(state, options) {
    const snapshot = useSnapshot(state, {
        sync: true,
    });
    useUnmount(() => {
        if (options?.resetOnUnmount) {
            snapshot.reset();
        }
    });
    return {
        ...snapshot,
        onSubmit: (e) => {
            e.preventDefault();
            const fields = Array.from(e.currentTarget.querySelectorAll(`[name],[data-input-name]`)).map((f) => f.getAttribute("name") || f.getAttribute("data-input-name"));
            for (const field of fields) {
                const nameWithoutIndexes = field
                    .split(".")
                    .filter((n) => isNaN(+n))
                    .join(".");
                const validation = get(snapshot.options.validation, nameWithoutIndexes);
                const value = get(snapshot.values, field);
                if (validation?.required &&
                    (Array.isArray(value) ? !value.length : !value)) {
                    set(state.errors, field, { message: validation.required });
                }
                else if (validation?.pattern &&
                    !validation.pattern[0].test(value)) {
                    set(state.errors, field, { message: validation.pattern[1] });
                }
                else if (!isNil(validation?.min) &&
                    value.length < validation?.min[0]) {
                    set(state.errors, field, { message: validation?.min[1] });
                }
            }
            if (Object.keys(state.errors).length === 0) {
                options?.onSubmit?.(snapshot.values);
            }
            else {
                console.error(state.errors);
            }
        },
        register: useCallback((name, handler) => {
            if (!state.registeredFields.value.includes(name)) {
                state.registeredFields.value.push(name);
            }
            const nameWithoutIndexes = name
                .split(".")
                .filter((n) => isNaN(+n))
                .join(".");
            const value = get(snapshot.values, name);
            const props = {
                name,
                value: !isNil(value) ? value : "",
                error: !!get(snapshot.errors, name),
                // @ts-expect-error the type is correct
                helpText: get(snapshot.errors, name)?.message,
                required: !!get(snapshot.options.validation, nameWithoutIndexes)?.required,
                ...(handler?.onChange || !handler?.onValueChange
                    ? {
                        onChange(event) {
                            snapshot.setValue(name, (handler?.onChange
                                ? handler?.onChange(event)
                                : event.target.value));
                        },
                    }
                    : {
                        onValueChange(value) {
                            snapshot.setValue(name, handler.onValueChange(value));
                        },
                    }),
            };
            if (!props.helpText) {
                delete props.helpText;
            }
            return props;
        }, 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [snapshot]),
    };
}
