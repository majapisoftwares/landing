import { Controller as RHFController, useForm as useRHForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useMemo } from "react";
import { get } from "lodash-es";
export function useForm({ schema, ...props }) {
    const jsonProps = JSON.stringify(props);
    const config = useMemo(() => ({
        resolver: schema ? zodResolver(schema) : undefined,
        ...props,
    }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [jsonProps, schema]);
    const formReturn = useRHForm(config);
    const register = formReturn.register;
    formReturn.register = function (name, options) {
        const registerReturn = register(name, options);
        const zodProperty = schema
            ?.shape?.[name];
        return {
            ...registerReturn,
            error: get(formReturn.formState.errors, name)?.message,
            required: !!zodProperty && !zodProperty.isOptional(),
        };
    };
    return formReturn;
}
export function Controller(props) {
    return <RHFController {...props}/>;
}
