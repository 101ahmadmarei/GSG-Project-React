import React from "react";
import Rating from "@mui/material/Rating";
import style from "./PriceAndRating.module.css";
const PriceAndRating = ({ price, rating }) => {
  return (
    <div className={style.priceRating}>
      <p>{price}</p>
      <div>
        <Rating name="read-only" value={+rating} readOnly />
        <p>{`${rating} of 5`}</p>
      </div>
    </div>
  );
};

export default PriceAndRating;
