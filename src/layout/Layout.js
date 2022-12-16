import React, { Fragment, useEffect } from "react";
import Footer from "../components/home/footer/Footer";
import Cart from "../components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import Wishlist from "../components/Cart/Wishlist";
import Navbar2 from "../components/navbar/Navbar2";
import Head from "../components/navbar/Head";
import Login from "../components/auth/Login";
import useHttp from "../hooks/use-http";
import { cartActions } from "../store/cart-slice";
import { wishlistActions } from "../store/wishlist-slice";
const Layout = (props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const showWishlist = useSelector((state) => state.wishlist.showWishlist);
  const { sendRequest, isLoading, error } = useHttp();
  useEffect(() => {
    console.log("useEffect");
    const replaceData = (data) => {
      dispatch(cartActions.replaceCart(data));
    };

    sendRequest(
      {
        url: "https://gsgstore-e51b4-default-rtdb.firebaseio.com/cart.json",
      },
      replaceData
    );
  }, [dispatch, sendRequest]);
  useEffect(() => {
    console.log("useEffect");
    const replaceData = (data) => {
      console.log("🚀 ~ file: Layout.js:33 ~ replaceData ~ data", data);

      dispatch(wishlistActions.replaceWishlist(data));
    };

    sendRequest(
      {
        url: "https://gsgstore-e51b4-default-rtdb.firebaseio.com/wishlist.json",
      },
      replaceData
    );
  }, [dispatch, sendRequest]);

  return (
    <Fragment>
      <Head />
      <Navbar2 />
      {showWishlist && <Wishlist />}
      {showCart && <Cart />}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
