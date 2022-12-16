import React, { useState, useEffect } from "react";
import Rating from "../../global/Rating";
import style from "./CustomsReview.module.css";
import Button from "@mui/material/Button";
const CustomsReview = ({ onAddedComment, addedComment, reviews }) => {
  const [showAllComments, setShowAllComments] = useState(false);

  const showComments = () => {
    reviews.length > 1 && setShowAllComments(!showAllComments);
  };

  return (
    <div>
      <h3>Top Customers Reviews</h3>
      <div className={style.comments}>
        {(showAllComments ? reviews : reviews.slice(0, 1)).map((review, i) => (
          <div className={style.comment} key={i}>
            <Rating rate={review.rating} />
            <p className={style.name}>
              By {review.name} <span className={style.span}>{review.date}</span>
            </p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      {reviews.length > 1 && (
        <Button color="info" onClick={showComments}>
          Show {showAllComments && reviews.length > 1 ? "less" : "more"} reviews
        </Button>
      )}
    </div>
  );
};

export default CustomsReview;
