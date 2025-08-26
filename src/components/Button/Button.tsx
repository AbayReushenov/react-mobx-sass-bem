import React from "react";
import "./Button.scss";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, type = "primary" }) => {
  return (
    <button className={`button button--${type}`} onClick={onClick}>
      {label}
    </button>
  );
};
