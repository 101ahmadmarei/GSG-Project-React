import React from "react";
import style from "./Text.module.css";
const Text = ({ text }) => {
  return <p className={style.text}>{text}</p>;
};

export default Text;
