import React from "react";
import style from "./ImageDress.module.css";
const ImageDress = ({ img, status, isNew }) => {
  const imgClasses = `${style.imageDress} ${status ? style.imgHover : ""}`;
  const compClasses = `${style.component} ${status ? style.comHover : ""} ${
    isNew ? style.new : ""
  }`;

  const buttonClasses = status ? style.button : style.display;
  return (
    <div className={compClasses}>
      <img className={imgClasses} src={img} alt="img" />
      <div className={status ? style.overlay : ""}></div>
      <img
        className={buttonClasses}
        src="/assets/images/Button/Primary/M.png"
        alt="img"
      />
    </div>
  );
};

export default ImageDress;
