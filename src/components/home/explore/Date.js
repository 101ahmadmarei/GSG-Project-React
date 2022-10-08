import React from "react";
import style from "./Date.module.css";
const Date = ({ date }) => {
  return <h4 className={style.date}>{date}</h4>;
};

export default Date;
