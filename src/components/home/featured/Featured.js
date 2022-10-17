import React, { useContext } from "react";
import style from "./Featured.module.css";
import Card from "./Card";
import Title from "../../global/Title";
import FullProductDetails from "../fullProduct/FullProductDetails";
import DescriptionContext from "../../../store/card-context";

const Featured = ({ Info }) => {
  const cardCtx = useContext(DescriptionContext);

  const Products = [
    {
      id: 1,
      img: "/assets/images/F1.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      id: 2,
      img: "/assets/images/F2.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      id: 3,
      img: "/assets/images/F3.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      id: 4,
      img: "/assets/images/F4.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
    {
      id: 5,
      img: "/assets/images/F5.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
    {
      id: 6,
      img: "/assets/images/F6.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: true,
    },
    {
      id: 7,
      img: "/assets/images/F7.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
    {
      id: 8,
      img: "/assets/images/F8.png",
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: false,
    },
  ];
  const myComponent = Products.map((item, index) => (
    <Card key={index} {...item} />
  ));

  return (
    <div className={style.feature}>
      {cardCtx.showCard && (
        <div
          className={style.overlay}
          onClick={() => cardCtx.closeCard()}
        ></div>
      )}
      {cardCtx.showCard && <FullProductDetails Info={Info} />}
      <Title Title="Feature" />
      <div className={style.products}>{myComponent}</div>
    </div>
  );
};

export default Featured;