import React from "react";
import style from "./Featured.module.css";
import Card from "./Card";
import Title from "../../global/Title";
import Slider from "./Slider";
import { useSelector } from "react-redux";

const Featured = () => {
  let Products = useSelector((state) => state.cardDetails.productDetails);
  Products = Products.map((item) => {
    return {
      id: item.id,
      img: item.id != 4 ? item.images[0] : item.images[1],
      description: item.totalInfo.title,
      price: item.totalInfo.price,
      isNew: true,
    };
  });
  const myComponent = Products.map((item, index) => (
    <Card key={index} {...item} />
  ));

  return (
    <div className={style.feature}>
      <Title Title="Featured" />
      <div className={style.products}>{myComponent}</div>
      <Slider com={myComponent} />
    </div>
  );
};

export default Featured;

// const Products = [
//   {
//     id: 1,
//     img: "/assets/images/F1.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: true,
//   },
//   {
//     id: 2,
//     img: "/assets/images/F2.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: true,
//   },
//   {
//     id: 3,
//     img: "/assets/images/F3.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: true,
//   },
//   {
//     id: 4,
//     img: "/assets/images/F4.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: false,
//   },
//   {
//     id: 5,
//     img: "/assets/images/F5.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: false,
//   },
//   {
//     id: 6,
//     img: "/assets/images/F6.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: true,
//   },
//   {
//     id: 7,
//     img: "/assets/images/F7.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: false,
//   },
//   {
//     id: 8,
//     img: "/assets/images/F8.png",
//     description: "Pueraria Mirifica And Study Phyto Estrogens",
//     price: "$599.00",
//     isNew: false,
//   },
// ];
