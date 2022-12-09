import React from "react";
import { useSelector } from "react-redux";
import style from "./SameCategory.module.css";
import Card from "../home/featured/Card";
import Title from "../global/Title";
const SameCategory = () => {
  let products = useSelector((state) => state.cardDetails.productDetails);
  products = products.slice(0, 4).map((item) => {
    return {
      id: item.id,
      img: +item.id !== 4 ? item.images[0] : item.images[1],
      title: item.totalInfo.title,
      price: item.totalInfo.price,
      rating: item.totalInfo.rating,
      category: item.totalInfo.otherInfo.category,
      isNew: true,
    };
  });
  console.log(products);
  return (
    <div className={style.same}>
      <Title Title="You May Also Like" />
      <div className={style.products}>
        {products.map((image, i) => (
          <Card
            key={i}
            img={image.img}
            description={
              image.title.length > 40
                ? image.title.slice(0, 40) + "..."
                : image.title
            }
            price={image.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SameCategory;
