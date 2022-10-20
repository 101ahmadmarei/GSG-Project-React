import React, { useContext } from "react";
import DescriptionContext from "../../../store/card-context";
import CloseIcon from "@mui/icons-material/Close";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { detailsCardActions } from "../../../store/details-card-slice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.header}>
      <p className={style.title}>The Sideswept Dhoti</p>
      <CloseIcon
        fontSize="large"
        onClick={() => dispatch(detailsCardActions.closeCard())}
        cursor="pointer"
      />
    </div>
  );
};

export default Header;
