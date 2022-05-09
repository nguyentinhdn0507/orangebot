import React from "react";

const Button = ({
  children,
  handleSubmit,
  bgColor,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      onClick={handleSubmit}
      {...props}
      className={`${bgColor} ${className}`}
    >
      <img src={icon} alt="" />
      {children}
    </button>
  );
};

export default Button;
