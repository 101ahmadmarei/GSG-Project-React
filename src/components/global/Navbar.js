import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import NavMobile from "./navbar/NavMobile";
import MainNavbar from "./navbar/Navbar";
import Head from "./navbar/Head";
function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const showCartHandler = () => {
    dispatch(cartActions.openCart());
  };
  const mainIcon = [
    <SearchIcon
      id="search"
      fontSize="small"
      sx={{ color: "#33333A" }}
      style={{ position: "relative", top: "15%" }}
    />,
    <FavoriteBorderIcon
      id="favorite"
      fontSize="small"
      sx={{ color: "#33333A" }}
      style={{ position: "relative", top: "15%" }}
    />,
    <IconButton
      aria-label={notificationsLabel(quantity)}
      onClick={showCartHandler}
      style={{ position: "relative", top: "0%" }}
    >
      <Badge
        badgeContent={quantity}
        color="primary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <ShoppingBagOutlinedIcon
          id="shopping"
          fontSize="small"
          sx={{ color: "#33333A" }}
        />
      </Badge>
    </IconButton>,
    <MenuIcon
      fontSize="small"
      sx={{ color: "#33333A" }}
      style={{ position: "relative", top: "15%" }}
    />,
  ];
  return (
    <div>
      <Head />
      <NavMobile mainIcons={mainIcon} />
      <MainNavbar mainIcons={mainIcon.slice(0, 3)} />
    </div>
  );
};

export default Navbar;
