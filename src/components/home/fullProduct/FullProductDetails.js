import React, { useContext, useEffect } from "react";
import DescriptionContext from "../../../store/card-context";
import ImageSide from "./ImageSide";
import TotalInfo from "./TotalInfo";
import Header from "./Header";
import Card from "@mui/material/Card";
import style from "./FullProductDetails.module.css";
import { useSelector } from "react-redux";
const FullProductDetails = () => {
  const Info = useSelector((state) => state.cardDetails.productDetails);
  const idCard = useSelector((state) => state.cardDetails.idCard);
  // console.log(Info[0].images);
  return (
    <Card className={style.fullProduct}>
      <Header />
      <article>
        <ImageSide images={Info[idCard - 1].images} />
        <TotalInfo Info={Info[idCard - 1].totalInfo} />
      </article>
      <button className={style.button}>View Full product Details</button>
    </Card>
  );
};

export default FullProductDetails;
