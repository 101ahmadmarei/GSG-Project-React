import React from "react";
import style from "./Title.module.css";
const Title = ({ title, index }) => {
  const classes = `${style.title} ${index === 0 ? style.t1 : ""}`;
  return <h1 className={classes}>{title}</h1>;
};

export default Title;
