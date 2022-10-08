import React from "react";
import style from "./Img.module.css";
const Img = ({ img, index }) => {
  const classes = index == 0 ? style.image : style.img;
  return <img src={img} alt="" className={classes} />;
};

export default Img;
