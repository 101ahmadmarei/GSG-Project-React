import React from "react";
import style from "./SmallImages.module.css";
const smallImages = ({ images, onChangeImage, activeImage }) => {
  const ChangeImageHandler = (event) => {
    const index = event.target.id - 1;
    onChangeImage(images[index]);
  };
  return (
    <div className={style.smallImages}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.image}
          id={img.id}
          alt={`img ${img.id}`}
          className={`${style.smallImage} ${
            activeImage - 1 == index ? style.active : ""
          }`}
          onClick={ChangeImageHandler}
        />
      ))}
    </div>
  );
};

export default smallImages;
