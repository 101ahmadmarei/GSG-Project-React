import React from "react";
import style from "./Description.module.css";
const Description = ({ description }) => {
  return (
    <div className={style.description}>
      <h3>Description</h3>
      <p> {description}</p>
    </div>
  );
};

export default Description;
