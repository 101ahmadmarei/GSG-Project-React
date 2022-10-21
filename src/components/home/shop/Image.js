import React from "react";
import style from "./Image.module.css";
const Image = ({ item, status }) => {
  const buttonClasses = status ? style.button : style.display;
  return (
    <div className={style.image}>
      <img src={item} alt="" className={style.ahmad} />
      <div className={status ? style.overlay : ""}></div>
      <button
        className={buttonClasses}
        src="/assets/images/Button/Primary/M.png"
        alt="img"
      >
        {" "}
        Quick View
      </button>
    </div>
  );
};

export default Image;
