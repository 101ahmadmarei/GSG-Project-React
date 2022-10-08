import React from "react";
import style from "./Desc.module.css";
const ShopNow = ({ desc }) => {
  return (
    <div className={style.desc1}>
      <span>{desc}</span>
    </div>
  );
};

export default ShopNow;
