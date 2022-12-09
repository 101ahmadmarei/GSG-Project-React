import React from "react";
import style from "./Rating.module.css";
import Rating from "@mui/material/Rating";

const RatinG = ({ rate }) => {
  return (
    <div className={style.rating}>
      <Rating name="read-only" value={rate} readOnly />
      <p>{`${rate} of 5`}</p>
    </div>
  );
};

export default RatinG;
