import React from "react";
import Icon from "./Icon";
import style from "./Navbar.module.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Navbar = ({ mainIcons }) => {
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
    icons: ["Login", ...mainIcons],
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
