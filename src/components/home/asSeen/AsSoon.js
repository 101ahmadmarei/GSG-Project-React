import React from "react";
import Title from "../../cart/Title";
import style from "./AsSoon.module.css";
const AsSoon = () => {
  return (
    <div className={style.asSoon}>
      <Title Title="As Seen On" />
      <img src="/assets/images/asSeen.png" alt="" />
    </div>
  );
};

export default AsSoon;
