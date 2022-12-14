import React, { useState } from "react";
import SmallImages from "./imageSide/SmallImages";
import MainImage from "./imageSide/MainImage";
import style from "./ImageSide.module.css";
// const images = [
//   { id: 1, image: "/assets/images/F1.png" },
//   { id: 2, image: "/assets/images/F1.1.png" },
//   { id: 3, image: "/assets/images/F1.2.png" },
//   { id: 4, image: "/assets/images/F1.3.png" },
// ];
const ImageSide = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className={style.imageSide}>
      <SmallImages
        images={images}
        onChangeImage={setCurrentImage}
        activeImage={currentImage}
      />
      <MainImage activeImage={currentImage} />
    </div>
  );
};

export default ImageSide;
