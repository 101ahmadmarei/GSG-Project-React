import React from "react";
import Button from "../../global/Button";
import style from "./Image.module.css";
const Image = ({ item, status }) => {
  const buttonClasses = status ? "shop" : "displayShop";
  return (
    <div className={style.image}>
      <img src={item} alt="" className={style.ahmad} />
      <div className={status ? style.overlay : ""}></div>
      <Button className={buttonClasses}> Quick View</Button>
    </div>
  );
};

export default Image;
