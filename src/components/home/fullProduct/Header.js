import React, { useContext } from "react";
import DescriptionContext from "../../../store/card-context";
import CloseIcon from "@mui/icons-material/Close";
import style from "./Header.module.css";
const Header = () => {
  const cardCtx = useContext(DescriptionContext);

  return (
    <div className={style.header}>
      <p className={style.title}>The Sideswept Dhoti</p>
      <CloseIcon
        fontSize="large"
        onClick={() => cardCtx.closeCard()}
        cursor="pointer"
      />
    </div>
  );
};

export default Header;
