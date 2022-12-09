import React from "react";
import Title from "../global/Title";
import style from "./AsSeen.module.css";
const AsSeen = () => {
  const images = [
    "/assets/images/D1.png",
    "/assets/images/D2.png",
    "/assets/images/D1.png",
  ];
  return (
    <div className={style.asSeen}>
      <Title Title="As Seen On Instagram" />
      <div className={style.images}>
        {images.map((item, index) => (
          <img src={item} alt="img" key={index} />
        ))}
      </div>
    </div>
  );
};

export default AsSeen;
