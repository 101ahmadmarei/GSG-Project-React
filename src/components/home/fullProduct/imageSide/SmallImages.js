import React from "react";
import style from "./SmallImages.module.css";
const smallImages = ({ images, onChangeImage, activeImage }) => {
  const ChangeImageHandler = (event) => {
    const index = event.target.id;
    onChangeImage(images[index]);
  };
  return (
    <div className={style.smallImages}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          id={index}
          alt={`img`}
          className={`${style.smallImage} ${
            activeImage == img ? style.active : ""
          }`}
          onClick={ChangeImageHandler}
        />
      ))}
    </div>
  );
};

export default smallImages;
