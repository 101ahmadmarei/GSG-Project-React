import React, { useContext } from "react";
import DescriptionContext from "../../../store/card-context";
import style from "./ImageDress.module.css";
const ImageDress = ({ img, status, isNew, id }) => {
  const cardCtx = useContext(DescriptionContext);

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
        id={id}
        className={buttonClasses}
        src="/assets/images/Button/Primary/M.png"
        alt="img"
        onClick={(event) => cardCtx.openCard(event)}
      />
    </div>
  );
};

export default ImageDress;
