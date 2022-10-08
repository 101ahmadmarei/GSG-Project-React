import React from "react";
import Icon from "./Icon";
import style from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Navbar = () => {
  let arrowUp = <KeyboardArrowUpIcon />;
  let arrowDown = (
    <KeyboardArrowDownIcon
      style={{ position: "absolute", top: "37%" }}
      fontSize="small"
    />
  );
  const myElement = {
    title: "matter",
    list: [
      <span>Shop {arrowDown}</span>,
      <span>FABRIC {arrowDown}</span>,
      <span>JOURNAL {arrowDown}</span>,
      <span>ABOUT {arrowDown}</span>,
    ],
    icons: [
      "Login",
      <SearchIcon
        fontSize="small"
        sx={{ color: "#33333A" }}
        style={{ position: "absolute", top: "25%" }}
      />,
      <FavoriteBorderIcon
        fontSize="small"
        sx={{ color: "#33333A" }}
        style={{ position: "absolute", top: "25%" }}
      />,
      <ShoppingBagOutlinedIcon
        fontSize="small"
        sx={{ color: "#33333A" }}
        style={{ position: "absolute", top: "25%" }}
      />,
    ],
  };
  const Menus = (
    <ul className={style.menus}>
      {myElement.list.map((item, i) => (
        <Icon key={i} item={item} />
      ))}
    </ul>
  );
  const Notification = (
    <ul className={style.notification}>
      {myElement.icons.map((item, i) => (
        <Icon key={i} item={item} />
      ))}
    </ul>
  );
  const Logo = <Icon item={myElement.title} className={style.title} />;

  return (
    <div className={style.navbar}>
      {Logo}
      <div>
        {Menus}
        {Notification}
      </div>
    </div>
  );
};

export default Navbar;
