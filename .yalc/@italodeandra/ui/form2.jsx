import { Controller as RHFController, useForm as useRHForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { get } from "lodash-es";
export function useForm({ schema, ...props }) {
    const formReturn = useRHForm({
        resolver: schema ? zodResolver(schema) : undefined,
        ...props,
    });
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
