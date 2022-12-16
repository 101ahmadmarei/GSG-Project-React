import React from "react";
import Rating from "../../global/Rating";
import style from "./CustomsReview.module.css";
const CustomsReview = () => {
  const reviews = [
    {
      customerName: "Ahmad Marei",
      date: "on February 18, 2017",
      desc: "Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses or contacts. What part of the eye is it that may be causing all your vision trouble? Your cornea! When the shape of your cornea is irregular, the image on your retina is blurry and out-of-focus. The cornea is a part of your eye that works to focus light and projects an image on the retina. This focusing of light is called refraction. The 3 main types of refractive errors are myopia (nearsightedness), hyperopia (farsightedness) and astigmatism. ",
      rating: 5,
    },
  ];

  return (
    <div>
      <h3>Top Customers Reviews</h3>
      <div className={style.comments}>
        {reviews.map((review, i) => (
          <div className={style.comment} key={i}>
            <Rating rate={review.rating} />
            <p className={style.name}>
              By {review.customerName}{" "}
              <span className={style.span}>{review.date}</span>
            </p>
            <p>{review.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomsReview;
