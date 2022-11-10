import { useContext } from "react";

import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
// import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const cartCtx = useContext(CartContext);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // const hasItems = cartCtx.items.length > 0;

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
  const closeCartHandler = () => {
    dispatch(cartActions.closeCart());
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

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCartHandler}>
          Close
        </button>
        {true && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
