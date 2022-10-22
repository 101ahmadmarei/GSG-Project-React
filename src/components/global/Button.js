import React from "react";
import style from "./Button.module.css";
const Button = (props) => {
  const { className = "", makeAction = () => {}, id = 0, children } = props;

  const myClasses = `${style.button} ${style[className]}`;

  return (
    <button
      className={myClasses}
      onClick={(event) => makeAction(event.target.id)}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
