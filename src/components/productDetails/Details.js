import React from "react";
import ImageSide from "../home/fullProduct/ImageSide";
import TotalInfo from "../home/fullProduct/TotalInfo";
import { useSelector } from "react-redux";
import style from "./Details.module.css";
const Details = ({ data }) => {
  console.log("🚀 ~ file: Details.js:7 ~ Details ~ data", data);

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
