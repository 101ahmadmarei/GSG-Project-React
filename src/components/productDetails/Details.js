import React from "react";
import ImageSide from "../home/fullProduct/ImageSide";
import TotalInfo from "../home/fullProduct/TotalInfo";
import { useSelector } from "react-redux";
import style from "./Details.module.css";
const Details = ({ data }) => {
  return (
    <div className={style.fullProduct}>
      <header>{` Women ${">"} Pants ${">"} Jeans`}</header>
      <article>
        <ImageSide images={data.images} />
        <TotalInfo Info={data.totalInfo} />
      </article>
    </div>
  );
};

export default Details;
