import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import style from "./NavMobile.module.css";

const NavMobile = () => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div className={style.navMobile}>
      <Avatar {...stringAvatar("Ahmad Marei")} />
      <div className={style.icons}>
        <SearchIcon fontSize="small" sx={{ color: "#33333A" }} />
        <FavoriteBorderIcon fontSize="small" sx={{ color: "#33333A" }} />
        <ShoppingBagOutlinedIcon fontSize="small" sx={{ color: "#33333A" }} />
        <MenuIcon fontSize="small" sx={{ color: "#33333A" }} />
      </div>
    </div>
  );
};

export default NavMobile;
