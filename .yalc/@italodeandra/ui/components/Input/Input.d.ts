import { UnstyledInputProps } from "../Input/UnstyledInput";
export type InputProps<Select extends boolean | undefined> = {
    loading?: boolean;
} & UnstyledInputProps<Select>;
export declare const defaultLabelClassName: string;
export declare const defaultInputClassNameUncolored = "block w-full rounded-md shadow-sm sm:text-sm data-[disabled]:cursor-not-allowed dark:bg-zinc-800 dark:placeholder:text-zinc-500 px-2.5";
export declare const defaultInputClassName: string;
export declare const defaultHelpTextClassName: string;
export declare const defaultTrailingClassName = "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-zinc-500 text-sm";
export declare const defaultLeadingClassName = "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-zinc-500 text-sm";
export declare const defaultLeadingInputClassName = "pl-10";
export declare const defaultTrailingInputClassName = "pr-10";
declare const _default: import("react").ForwardRefExoticComponent<Omit<InputProps<boolean | undefined>, "ref"> & import("react").RefAttributes<HTMLInputElement | HTMLSelectElement>>;
export default _default;
