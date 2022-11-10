import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import Button from "../../../global/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import { detailsCardActions } from "../../../../store/details-card-slice";
import style from "./Quantity.module.css";
const Quantity = () => {
  const dispatch = useDispatch();
  const idCard = useSelector((state) => state.cardDetails.idCard);
  const productDetails = useSelector(
    (state) => state.cardDetails.productDetails
  );
  const [quantity, setQuantity] = useState(1);
  const RemoveItem = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const AddItem = () => {
    setQuantity(quantity + 1);
  };
  const addItemHandlerToCart = () => {
    // console.log(productDetails);
    const currentItem = productDetails.find((item) => item.id === +idCard);
    dispatch(
      cartActions.addItem({
        id: currentItem.id,
        name: currentItem.totalInfo.title,
        price: currentItem.totalInfo.price,
        quantity,
      })
    );
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
        <Button className={style.addToCart} makeAction={addItemHandlerToCart}>
          Add To Cart
        </Button>
        <div>
          <HelpCenterOutlinedIcon fontSize="large" />

          <button className={style.addToWishlist}>Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
