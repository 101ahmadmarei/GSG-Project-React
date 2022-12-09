import React, { useState, useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import Button from "../../../global/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import { detailsCardActions } from "../../../../store/details-card-slice";
import { wishlistActions } from "../../../../store/wishlist-slice";
import { useSnackbar } from "notistack";
import style from "./Quantity.module.css";
import AuthContext from "../../../../store/auth-context";
const Quantity = () => {
  const { enqueueSnackbar } = useSnackbar();
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const idCard = useSelector((state) => state.cardDetails.idCard);
  const isInWishlist = useSelector((state) => state.wishlist.wishlists).find(
    (item) => item.id === idCard
  );
  console.log(isInWishlist);
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
    if (!authCtx.isLoggedIn) {
      enqueueSnackbar("You must login first", {
        variant: "warning",
      });
      return;
    }
    const currentItem = productDetails.find((item) => item.id === idCard);
    dispatch(
      cartActions.addItem({
        id: currentItem.id,
        name: currentItem.totalInfo.title,
        price: currentItem.totalInfo.price,
        quantity,
      })
    );
    enqueueSnackbar("The product has been added to the cart successfully! ", {
      variant: "success",
    });

    // setOpen(true);
  };
  const changeStatusWishlist = () => {
    if (!authCtx.isLoggedIn) {
      enqueueSnackbar("You must login first", {
        variant: "warning",
      });
      return;
    }
    const currentItem = productDetails.find((item) => item.id === idCard);
    enqueueSnackbar(
      `The product has been ${
        isInWishlist ? "removed from" : "added to"
      }   wishlist ! `,
      {
        variant: "info",
      }
    );
    !isInWishlist
      ? dispatch(
          wishlistActions.addItem({
            id: currentItem.id,
            name: currentItem.totalInfo.title,
            price: currentItem.totalInfo.price,
          })
        )
      : dispatch(wishlistActions.removeItem(idCard));
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

          <button
            className={style.addToWishlist}
            onClick={changeStatusWishlist}
          >
            {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
