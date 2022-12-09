import React from "react";
import CustomsReview from "./reviews/CustomsReview";
import style from "./Review.module.css";
import HeaderReview from "./reviews/HeaderReview";
import Button from "@mui/material/Button";
const Review = () => {
  return (
    <div className={style.review}>
      <HeaderReview />
      <CustomsReview />
      <Button color="info">Show more reviews</Button>
    </div>
  );
};

export default Review;
