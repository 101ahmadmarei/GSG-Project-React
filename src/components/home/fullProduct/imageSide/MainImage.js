import React from "react";
import style from "./MainImage.module.css";
const MainImage = ({ activeImage }) => {
  return <img src={activeImage} alt="main img" className={style.mainImage} />;
};

export default MainImage;
