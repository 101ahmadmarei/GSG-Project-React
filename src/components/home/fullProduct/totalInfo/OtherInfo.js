import React from "react";
import style from "./OtherInfo.module.css";
const OtherInfo = ({ stock, brand, category }) => {
  return (
    <div className={style.otherInfo}>
      <div>
        <h3>Stock</h3>
        <p>{stock}</p>
      </div>
      <div>
        <h3>Brand</h3>
        <p>{brand}</p>
      </div>
      <div>
        <h3>Category</h3>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default OtherInfo;
