import React from "react";
import style from "./List.module.css";
const List = ({ text, index }) => {
  if (index == 0 || index == 2 || index == 6)
    return <li className={style.title}>{text}</li>;
  return <li className={style.items}>{text}</li>;
};

export default List;
