import React from "react";
import ProductName from "./totalInfo/ProductName";
import PriceAndRating from "./totalInfo/PriceAndRating";
import Description from "./totalInfo/Description";
import OtherInfo from "./totalInfo/OtherInfo";
import SizeInfo from "./totalInfo/SizeInfo";
import Quantity from "./totalInfo/Quantity";
import style from "./TotalInfo.module.css";
const TotalInfo = ({ Info }) => {
  // const Info = {
  //   title: "The Sideswept Dhoti + Bottom Line Grey (Silk)",
  //   price: "SGD 139.90 ",
  //   rating: "4.8",
  //   description:
  //     "Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ",
  //   otherInfo: {
  //     employment: "54 jobs",
  //     partnership: "Randall Armstrong",
  //     collab: "Augusta Mendoza",
  //   },
  // };

  return (
    <div className={style.totalInfo}>
      <ProductName title={Info.title} />
      <PriceAndRating price={Info.price} rating={Info.rating} />
      <Description description={Info.description} />
      <OtherInfo {...Info.otherInfo} />
      <SizeInfo />
      <Quantity />
    </div>
  );
};

export default TotalInfo;
