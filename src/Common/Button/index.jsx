import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      className={`bg-white border-none mx-2 shadow-lg p-2 border-rounded cursor-pointer `}
      onClick={() => onClick(label)}
    >
      {label} hr
    </button>
  );
};

export default Button;
