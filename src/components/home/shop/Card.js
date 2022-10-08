import React, { useState } from "react";
import Image from "./Image";
import Desc from "./Desc";
import style from "./Card.module.css";
const Card = ({ desc, item }) => {
  const [quickView, setQuickView] = useState(false);
  return (
    <div
      className={style.card}
      onMouseEnter={() => setQuickView(true)}
      onMouseLeave={() => setQuickView(false)}
    >
      <Image item={item} status={quickView} />
      <Desc desc={desc} />
    </div>
  );
};

export default Card;
