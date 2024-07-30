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
      style={{
        borderRadius: "10px",
        padding: "7px",
        margin: "5px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginBottom: "20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
