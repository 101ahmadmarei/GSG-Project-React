import React from "react";
import style from "./Body.module.css";

const Body = () => {
  return (
    <div className={style.body}>
      <div className={style.arrowLeft}></div>
      <div className={style.arrowRight}></div>
      <h1>Perfume Tips Tricks</h1>
      <button>Shop Now</button>
    </div>
  );
};

export default Body;
