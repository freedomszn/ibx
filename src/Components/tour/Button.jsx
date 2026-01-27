import React from "react";

const Button = ({ children, className }) => {
  return (
    <>
      <button className={`rounded-md geist orange w-30.5 h-8 text-sm font-bold text-black hover:scale-105 transition-all duration-500 point ${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
