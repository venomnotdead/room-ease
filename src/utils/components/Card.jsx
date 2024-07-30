import React from "react";

const Card = ({ children, className, onClick, style }) => {
  return (
    <div
      onClick={() => {
        if (onclick) onClick();
      }}
      className={`bg-primary-darker px-6 rounded-xl m-2 shadow-xl ${
        className ?? ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;