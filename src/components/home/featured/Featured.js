import React from "react";
import style from "./Featured.module.css";
import Card from "./Card";
import Title from "../../cart/Title";

const Featured = () => {
  const Products = [
    {
      img: "/assets/images/F1.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      img: "/assets/images/F2.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      img: "/assets/images/F3.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      img: "/assets/images/F4.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
    {
      img: "/assets/images/F5.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
    {
      img: "/assets/images/F6.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      img: "/assets/images/F7.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
    {
      img: "/assets/images/F8.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
  ];
  const myComponent = Products.map((item, index) => (
    <Card
      key={index}
      img={item.img}
      description={item.description}
      price={item.price}
      isNew={item.isNew}
    />
  ));

  return (
    <div className={style.feature}>
      <Title Title="Feature" />
      <div className={style.products}>{myComponent}</div>
    </div>
  );
};

export default Featured;
