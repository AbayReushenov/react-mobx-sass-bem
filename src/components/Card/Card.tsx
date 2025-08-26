import React from "react";
import "./Card.scss";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  const baseClass = "card";
  const classes = [baseClass, className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <div className="card__content">{children}</div>
    </div>
  );
};
