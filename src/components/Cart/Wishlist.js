import React from "react";

import Modal from "../../UI/Modal";
import WishlistItem from "./WishlistItem";
import classes from "./Wishlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../../store/wishlist-slice";

const Wishlist = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.wishlists);
  const cartItemRemoveHandler = (id) => {
    dispatch(wishlistActions.removeItem(id));
  };

  const cartItemAddHandler = (currentItem) => {
    dispatch(
      wishlistActions.addItem({
        id: currentItem.id,
        name: currentItem.name,
        price: currentItem.price,
      })
    );
  };
  const closeWishlistHandler = () => {
    dispatch(wishlistActions.closeWishlist());
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <WishlistItem
          key={item.id}
          name={item.name}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={closeWishlistHandler}>
      {cartItems}

      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={closeWishlistHandler}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Wishlist;
