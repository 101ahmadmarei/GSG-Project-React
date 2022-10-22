import React, { useState, useRef, useEffect } from "react";
import style from "./Featured.module.css";
import Card from "./Card";
import Title from "../../global/Title";
import Slider from "./Slider";
import { useSelector } from "react-redux";
import Button from "../../global/Button";
const Featured = () => {
  let Products = useSelector((state) => state.cardDetails.productDetails);
  const [showMore, setShowMore] = useState(false);
  const [components, setComponents] = useState([]);
  const featureSection = useRef(null);

  useEffect(() => {
    const MyProducts = Products.map((item) => {
      return {
        id: item.id,
        img: item.id != 4 ? item.images[0] : item.images[1],
        description: item.totalInfo.title,
        price: item.totalInfo.price,
        isNew: true,
      };
    });
    setComponents(
      MyProducts.map((item, index) => <Card key={index} {...item} />)
    );
  }, [Products]);

  const changeShowMoreHandler = () => {
    setShowMore((prevState) => !prevState);
    if (showMore) {
      featureSection.current.scrollIntoView({ behavior: "smooth" });
      console.log(featureSection.current.offsetTop);
    }
  };
  return (
    <div className={style.feature} id="feature" ref={featureSection}>
      <Title Title="Featured" />
      <div className={style.products}>
        {showMore ? components : components.slice(0, 8)}
      </div>
      <Slider com={components} />
      <div className={style.showMoreTo}>
        <Button makeAction={changeShowMoreHandler} className={"showMore"}>
          {!showMore ? "Show More..." : "Show Less..."}
        </Button>
      </div>
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
