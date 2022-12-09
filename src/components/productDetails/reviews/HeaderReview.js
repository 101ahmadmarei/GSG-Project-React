import React, { useState } from "react";
import style from "./HeaderReview.module.css";
import Button from "../../global/Button";
import Rating from "../../global/Rating";
import FormComments from "./FormComments";
const HeaderReview = () => {
  const [open, setOpen] = useState(false);

  const openForm = () => {
    console.log("openForm");
    setOpen(true);
  };
  return (
    <div className={style.review}>
      <Rating rate={4} />
      <div className={style.Button}>
        <span>Share your thoughts with other customers</span>
        <Button makeAction={openForm}>Write a review</Button>
        <FormComments open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default HeaderReview;
