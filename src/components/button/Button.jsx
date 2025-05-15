import React from "react";

const Button = ({ variant = "", children, onClick, className = "", ...props }) => {
  const classes = `btn ${variant} ${className}`.trim();

  return (
    <button id="" type="button" className={classes} onClick={onClick} {...props}>
      <span className="btn__label">{children}</span>
    </button>
  );
};

export default Button;
