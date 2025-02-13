import { FormEvent } from "react";
import { ArrayKey, IsTuple, TupleKeys } from "react-hook-form/dist/types/path/common";
import { Get, PartialDeep, RequiredDeep, WritableDeep } from "type-fest";
import { DeepPartial } from "redux";
type Any = any;
export type DeepMapValues<T, V> = {
    [K in keyof T]: T[K] extends Array<Any> ? DeepMapValues<T[K][0], V> & V : T[K] extends object ? DeepMapValues<T[K], V> : V;
};
export type IsEqual<T1, T2> = T1 extends T2 ? (<G>() => G extends T1 ? 1 : 2) extends <G>() => G extends T2 ? 1 : 2 ? true : false : false;
export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export type BrowserNativeObject = Date | FileList | File;
export type FieldValues = Record<string, Any>;
export type AnyIsEqual<T1, T2> = T1 extends T2 ? IsEqual<T1, T2> extends true ? true : never : never;
export type PathImpl<K extends string | number, V, TraversedTypes> = V extends Primitive | BrowserNativeObject ? `${K}` : true extends AnyIsEqual<TraversedTypes, V> ? `${K}` : `${K}` | `${K}.${PathInternal<V, TraversedTypes | V>}`;
export type PathInternal<T, TraversedTypes = T> = T extends ReadonlyArray<infer V> ? IsTuple<T> extends true ? {
    [K in TupleKeys<T>]-?: PathImpl<K & string, T[K], TraversedTypes>;
}[TupleKeys<T>] : PathImpl<ArrayKey, V, TraversedTypes> : {
    [K in keyof T]-?: PathImpl<K & string, T[K], TraversedTypes>;
}[keyof T];
export type Path<T> = T extends Any ? PathInternal<T> : never;
export type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;
export type DeepRequiredByValidation<T, V extends {
    [K in keyof T]?: Any;
}> = {
    [P in keyof T]-?: P extends keyof V ? T[P] extends object ? DeepRequiredByValidation<T[P], V[P]> : DeepRequiredByValidation<NonNullable<T[P]>, V[P]> : T[P];
};
export type Validation = {
    required?: string;
    min?: [number, string];
    pattern?: [RegExp, string];
};
export declare function createFormState<T extends object, V extends PartialDeep<DeepMapValues<RequiredDeep<T>, Validation>>>(options: {
    defaultValues: T;
    validation?: V;
}): {
    options: {
        defaultValues: T;
        validation?: V;
    };
    values: DeepRequiredByValidation<T, V>;
    setValue<N extends FieldPath<T>>(name: N, value: DeepPartial<Get<T, N>>): void;
    errors: DeepMapValues<RequiredDeep<T>, {
        message: string;
    }>;
    registeredFields: {
        value: string[];
    } & {
        $$valtioSnapshot: {
            value: string[];
        };
    };
    reset(values?: DeepPartial<T>): void;
};
export declare function useForm<T extends ReturnType<typeof createFormState>>(state: T, options?: {
    onSubmit?: (values: T["values"]) => void;
    resetOnUnmount?: boolean;
}): WritableDeep<import("valtio").Snapshot<T>> & {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    register: <N extends FieldPath<T["values"]>>(name: N, handler?: {
        onChange?: (e: Any) => Any;
        onValueChange?: (e: Any) => Any;
    }) => {
        onChange(event: {
            target: {
                value: Any;
            };
        }): void;
        name: N;
        value: any;
        error: boolean;
        helpText: any;
        required: boolean;
    } | {
        onValueChange(value: Any): void;
        name: N;
        value: any;
        error: boolean;
        helpText: any;
        required: boolean;
    };
};
export {};
