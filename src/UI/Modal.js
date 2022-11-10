import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(cartActions.closeCart());
  };
  return (
    <Fragment>
      <Backdrop onClose={closeCartHandler} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
