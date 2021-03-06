import React, { useState } from "react";
import { eyesclose, eyesopen } from "../../svg/index";
const InputPassword = ({
  label,
  type,
  className,
  icon,
  styleSpan,
  classNameInput,
  iconRight = false,
  showEyes = true,
  placeholder,
  onclickRightIcon,
  onChange,
  value,
  ...props
}) => {
  const [togglePassword, setTogglePassword] = useState(true);

  return (
    <div className={className}>
      <label className="text-sm text-colorForm" htmlFor={props.id || props.name}>
        {label}
      </label>
      <div className={`flex  items-center ${iconRight ? "justify-end" : "justify-start"}`}>
        {icon && (
          <div className="flex items-center absolute z-10">
            <div>
              {showEyes && (
                <img
                  onClick={() => setTogglePassword(!togglePassword)}
                  src={togglePassword ? eyesopen : eyesclose}
                  alt=""
                  className="mx-2 cursor-pointer"
                />
              )}
            </div>

            <div className={`${styleSpan} cursor-pointer`} onClick={() => onclickRightIcon?.()}>
              <img src={icon} />
            </div>
          </div>
        )}
        <input
          className={`border w-full ${classNameInput}`}
          type={togglePassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputPassword;
