import React from "react";
import style from "./Description.module.css";
const Description = ({ description, status }) => {
  const classes = `${style.description} ${status ? style.hover : ""}`;

  return <div className={classes}>{description}</div>;
};

export default Description;
