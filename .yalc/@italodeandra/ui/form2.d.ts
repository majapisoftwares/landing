import { ControllerFieldState, ControllerProps, ControllerRenderProps, FieldPath, FieldValues, UseFormProps, UseFormStateReturn } from "react-hook-form";
import * as z from "zod";
import React from "react";
export declare function useForm<TSchema extends z.Schema<any, any>, TFieldValues extends FieldValues = z.infer<TSchema>>({ schema, ...props }: UseFormProps<TFieldValues> & {
    schema?: TSchema;
}): import("react-hook-form").UseFormReturn<TFieldValues, any, undefined>;
export declare function Controller<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: Omit<ControllerProps<TFieldValues, TName>, "render"> & {
    render: ({ field, fieldState, formState, }: {
        field: ControllerRenderProps<TFieldValues, TName> & {
            error?: string;
        };
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<TFieldValues>;
    }) => React.ReactElement;
}): React.JSX.Element;
