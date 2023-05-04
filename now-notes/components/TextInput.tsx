import React from "react";

export type TextInputProps = {
  type: "text" | "password" | "number";
  colorScheme?: string;
  borderScheme?: string;
  rounded?: "xs" | "md" | "lg";
  placeHolder: string;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  Disabled?: boolean;
  readonly?: boolean;
  // required?: boolean;
  size: "lg" | "md" | "sm" | "xs";
  name?: string;
};

const sizes = {
  lg: "h-20",
  md: "h-16",
  sm: "h-12",
  xs: "h-10",
};

const radius = {
  xs: "rounded-xs",
  md: "rounded-md",
  normal: "rounded",
  lg: "rounded-lg",
};

const TextInput = (props: TextInputProps) => {
  const {
    type,
    colorScheme,
    borderScheme,
    rounded,
    placeHolder,
    variant,
    Disabled,
    readonly,
    size,
    name,
  } = props;
  return (
    <>
      <input
        className={` ${(sizes as any)[size!]} my-2 w-full p-2 align-middle ${
          (radius as any)[rounded!]
        }  text-md tracking-wide text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400 `}
        type={props.type}
        disabled={props.Disabled}
        readOnly={props.readonly}
        // required={props.required}
        placeholder={props.placeHolder}
      />
    </>
  );
};

export default TextInput;
