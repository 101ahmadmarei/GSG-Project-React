import React from "react";
import style from "./ProductName.module.css";
const ProductName = ({ title }) => {
  return <div className={style.title}>{title}</div>;
};

export default ProductName;
