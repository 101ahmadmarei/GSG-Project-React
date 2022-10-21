import React from "react";
import style from "./Button.module.css";
const Button = ({ describe, styleC = {} }) => {
  return <button className={style.button}>{describe}</button>;
};

export default Button;
