import React from "react";
import style from "./Price.module.css";
const Price = ({ price, status }) => {
  const classes = `${style.price} ${status ? style.hover : ""}`;
  return <div className={style.price}>{price}$</div>;
};

export default Price;
