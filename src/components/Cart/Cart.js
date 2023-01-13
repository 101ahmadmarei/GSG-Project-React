import { useState, Fragment, useEffect, useCallback } from "react";

import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Checkout from "./Checkout";
import { useSnackbar } from "notistack";
// import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner";
const Cart = (props) => {
  const { sendRequest, error, isLoading } = useHttp();

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isCheckout, setIsCheckout] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const cartCtx = useContext(CartContext);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;
  useEffect(() => {
    fetch("https://test-4c533-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify({ totalAmount, items, totalQuantity }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    });
  }, [totalAmount, items, totalQuantity]);

  const checkOrderHandler = () => {
    setIsCheckout(true);
  };
  const closeCartHandler = () => {
    dispatch(cartActions.closeCart());
  };

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const cartItemAddHandler = (currentItem) => {
    dispatch(
      cartActions.addItem({
        id: currentItem.id,
        name: currentItem.name,
        price: currentItem.price,
        quantity: 1,
      })
    );
  };

  const submitOrderHandler = async (userData) => {
    const printData = (data) => {
      console.log(data);
    };
    sendRequest(
      {
        url: "https://test-4c533-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        body: {
          user: userData,
          orderedItems: { "Total Amount": totalAmount, items },
        },
        header: {
          "Content-Type": "application/json",
        },
      },
      printData
    );
    dispatch(cartActions.clearCart());
    closeCartHandler();
    enqueueSnackbar("Order placed successfully!", { variant: "success" });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={closeCartHandler}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={closeCartHandler} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
