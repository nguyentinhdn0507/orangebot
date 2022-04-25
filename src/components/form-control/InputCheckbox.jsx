import React from "react";

const InputCheckbox = ({ text, ...props }) => {
  return (
    <div className="text-sm flex items-center ">
      <label {...props} className="cursor-pointer">
        <input type="checkbox" {...props} />
        <span className="text-sm ml-2 font-[400] text-black">{text}</span>
      </label>
    </div>
  );
};

export default InputCheckbox;
