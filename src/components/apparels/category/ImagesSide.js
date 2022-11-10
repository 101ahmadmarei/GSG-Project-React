import React from "react";
import Card from "../../home/featured/Card";
import style from "./ImagesSide.module.css";
const ImagesSide = ({ images }) => {
  return (
    <div className={style.products}>
      {images.map((image, i) => (
        <Card
          key={i}
          img={image.image}
          description={
            image.title.length > 40
              ? image.title.slice(0, 40) + "..."
              : image.title
          }
          price={image.price}
        />
      ))}
    </div>
  );
};

export default ImagesSide;
