import React from "react";

const InputField = ({
  label,
  type,
  haveIcon,
  iconRight = false,
  icon,
  styleSpan,
  className,
  classNameInput,
  placeholder,
  styleInput,
  flexfull,
  onChange,
  value,
  ...props
}) => {
  return (
    <div className={className}>
      <label
        className="text-sm text-colorForm"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <div
        className={`flex  items-center ${flexfull} ${
          iconRight ? "justify-end" : "justify-start"
        }`}
      >
        {icon && (
          <span className={`${styleSpan} absolute z-10`}>
            <img src={icon} />
          </span>
        )}

        <input
          className={`border  w-full ${classNameInput}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
