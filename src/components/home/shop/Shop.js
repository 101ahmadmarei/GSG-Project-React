import React from "react";
import Title from "../../cart/Title";
import Card from "./Card";

import style from "./Shop.module.css";
const Shop = () => {
  const images = [
    { desc: "Pants", img: "/assets/images/Pants-shop.png" },
    { desc: "Jumpsuits", img: "/assets/images/jumpsuits-shop.png" },
    { desc: "Tops", img: "/assets/images/tops-shop.png" },
    { desc: "Accessories", img: "/assets/images/Accessories-shop.png" },
  ];

  return (
    <div className={style.shop}>
      <Title Title="Shop" />

      <div className={style.types}>
        {images.map((product, i) => (
          <Card key={i} desc={product.desc} item={product.img} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
