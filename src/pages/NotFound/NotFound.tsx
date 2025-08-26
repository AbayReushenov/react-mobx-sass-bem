import React from "react";
import "./NotFound.scss";

export const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Страница не найдена</h2>
      <p className="not-found__text">Проверьте адрес или вернитесь на главную.</p>
    </div>
  );
};

export default NotFound;
