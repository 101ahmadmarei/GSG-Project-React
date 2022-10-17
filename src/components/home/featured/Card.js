import React, { useState } from "react";
import Description from "./Description";
import ImageDress from "./ImageDress";
import Price from "./Price";
import style from "./Card.module.css";
const Card = (props) => {
  const [quickView, setQuickView] = useState(false);
  return (
    <div
      className={style.card}
      onMouseEnter={() => setQuickView(true)}
      onMouseLeave={() => setQuickView(false)}
    >
      <ImageDress
        img={props.img}
        status={quickView}
        isNew={props.isNew}
        id={props.id}
      />
      <Description
        description={props.description}
        status={quickView}
        className={style.afterHover}
      />
      <Price
        price={props.price}
        status={quickView}
        className={style.afterHover}
      />
    </div>
  );
};

export default Card;
