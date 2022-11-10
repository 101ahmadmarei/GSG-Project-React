import React from "react";
import Avatar from "@mui/material/Avatar";
import style from "./NavMobile.module.css";

const NavMobile = ({ mainIcons }) => {
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
        {mainIcons.map((icon, i) => (
          <div key={i}>{icon}</div>
        ))}
      </div>
    </div>
  );
};

export default NavMobile;
