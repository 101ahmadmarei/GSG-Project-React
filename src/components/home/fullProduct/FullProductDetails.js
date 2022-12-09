import React, { useContext, useEffect } from "react";
import DescriptionContext from "../../../store/card-context";
import ImageSide from "./ImageSide";
import TotalInfo from "./TotalInfo";
import Header from "./Header";
import Card from "@mui/material/Card";
import style from "./FullProductDetails.module.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { InvertColorsOffRounded } from "@mui/icons-material";

const FullProductDetails = () => {
  const location = useLocation();
  const allInfo = useSelector((state) => state.cardDetails.productDetails);
  const idCard = useSelector((state) => state.cardDetails.idCard);
  console.log(
    "🚀 ~ file: FullProductDetails.js ~ line 13 ~ FullProductDetails ~ idCard",
    location.pathname
  );
  const Info = allInfo.find((item) => item.id === idCard);

  return (
    <Card className={style.fullProduct}>
      <Header />
      <article>
        <ImageSide images={Info.images} />
        <TotalInfo Info={Info.totalInfo} />
      </article>
      <Link className={style.fullProductButt} to={`${idCard}`}>
        View Full product Details
      </Link>
    </Card>
  );
};

export default FullProductDetails;
