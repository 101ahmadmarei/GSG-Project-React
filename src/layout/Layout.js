import React, { Fragment, useEffect } from "react";
import Footer from "../components/home/footer/Footer";
import Cart from "../components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import Wishlist from "../components/Cart/Wishlist";
import Navbar2 from "../components/navbar/Navbar2";
import Head from "../components/navbar/Head";
import Login from "../components/auth/Login";
const Layout = (props) => {
  const showCart = useSelector((state) => state.cart.showCart);
  const showWishlist = useSelector((state) => state.wishlist.showWishlist);

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
