import React from "react";

const InputCheckbox = ({ className, text, ...props }) => {
  return (
    <div>
      <label {...props} className={`cursor pointer ${className}`}>
        <input type="checkbox" {...props} className="rounded-sm " />
        <span className="text-sm ml-2 font-[400] text-black">{text}</span>
      </label>
    </div>
  );
};

export default InputCheckbox;
