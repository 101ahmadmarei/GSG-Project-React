import React from "react";
import style from "./SizeInfo.module.css";
const SizeInfo = () => {
  const sizes = [1, 2, 3, 4];
  return (
    <div className={style.sizeInfo}>
      <h2>SIZE</h2>
      <div>
        <ul>
          {sizes.map((size, i) => (
            <li key={i}>
              <span>{size}</span>
            </li>
          ))}
        </ul>
        <p className={style.p1}>Size Guidelines</p>
      </div>
      <p className={style.p2}>
        Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.
      </p>
    </div>
  );
};

export default SizeInfo;
