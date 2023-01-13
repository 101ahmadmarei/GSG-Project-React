import React, { useState, useEffect, useCallback } from "react";
import CustomsReview from "./reviews/CustomsReview";
import style from "./Review.module.css";
import HeaderReview from "./reviews/HeaderReview";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner";
const Review = () => {
  const [addedComment, setAddedComment] = useState(false);
  const { sendRequest, isLoading } = useHttp();
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const { productId } = params;
  const allComments = (data) => {
    let comments = [];
    for (const key in data) {
      const comment = {
        id: key,
        ...data[key],
      };
      comments.push(comment);
    }
    comments = comments.sort((a, b) => b.rating - a.rating);
    setReviews(comments);
    setAddedComment(false);
  };
  useEffect(() => {
    sendRequest(
      {
        url: `https://test-4c533-default-rtdb.firebaseio.com/reviews/${productId}.json`,
      },
      allComments
    );
  }, [sendRequest, productId]);
  const addNewComment = useCallback(() => {
    setAddedComment(true);
    sendRequest(
      {
        url: `https://test-4c533-default-rtdb.firebaseio.com/reviews/${productId}.json`,
      },
      allComments
    );
  }, [sendRequest, productId]);

  return (
    <div className={style.review}>
      <HeaderReview onAddedComment={addNewComment} />
      {reviews.length === 0 && !isLoading && <p>No reviews yet</p>}
      {isLoading && (
        <div className={style.loading}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && reviews.length > 0 && <CustomsReview reviews={reviews} />}
    </div>
  );
};

export default Review;
