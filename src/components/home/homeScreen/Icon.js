import React from "react";
import style from "./Icon.module.css";
const Icon = (props) => {
  if (props.item == "matter")
    return <span className={style.title}>{props.item}</span>;

  return <li className={style.myIcon}>{props.item}</li>;
};

export default Icon;
