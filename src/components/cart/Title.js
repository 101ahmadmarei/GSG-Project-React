import React from "react";
import style from "./Title.module.css";
const Title = ({ Title }) => {
  return <h1 className={style.title}>{Title}</h1>;
};

export default Title;
