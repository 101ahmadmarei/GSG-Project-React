import React from "react";
import Title from "../../cart/Title";
import Video from "./Video";
import Button from "./Button";

import style from "./Videos.module.css";
const Videos = () => {
  const images = [
    { desc: "Jamdani", img: "/assets/images/video0.png" },
    { desc: "Lorem ipsum dolor sit amet", img: "/assets/images/video1.png" },
    { desc: "Lorem ipsum dolor sit amet", img: "/assets/images/video2.png" },
  ];

  return (
    <div className={style.video}>
      <Title Title="Recommended Videos" />
      <div className={style.types}>
        {images.map((product, i) => (
          <Video key={i} desc={product.desc} item={product.img} />
        ))}
      </div>
      <Button />
    </div>
  );
};

export default Videos;
