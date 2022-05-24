import React from "react";

const InputCheckbox = ({ className, text, ...props }) => {
  return (
    <>
      <label {...props} className={`${className}`}>
        <input type="checkbox" {...props} className="rounded-sm  cursor-pointer" />
        <span className="text-sm ml-2 font-[400] text-black">{text}</span>
      </label>
    </>
  );
};

export default InputCheckbox;
