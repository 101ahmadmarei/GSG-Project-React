import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import style from "./Quantity.module.css";
const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const RemoveItem = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const AddItem = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={style.quantity}>
      <h3>QUANTITY</h3>
      <div>
        <ul>
          <li onClick={RemoveItem}>
            <RemoveIcon />
          </li>
          <li className={style.quantityNumber}>
            <span>{quantity}</span>
          </li>
          <li onClick={AddItem}>
            <AddIcon />
          </li>
        </ul>
        <button className={style.addToCart}>Add To Cart</button>
        <div>
          <HelpCenterOutlinedIcon fontSize="large" />
          <button className={style.addToWishlist}>Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
