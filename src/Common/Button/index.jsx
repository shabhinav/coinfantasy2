import React from "react";

const Button = ({ label, onClick, isSelected }) => {
  return (
    <button
      className={`bg-white border-none mx-2 shadow-lg p-2 border-rounded cursor-pointer ${
        isSelected ? "text-primary" : ""
      }`}
      onClick={() => onClick(label)}
    >
      {label} days
    </button>
  );
};

export default Button;
