import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsCardActions } from "../store/details-card-slice";
import style from "./Overlay.module.css";
const Overlay = () => {
  const dispatch = useDispatch();
  const showCard = useSelector((state) => state.cardDetails.showCard);
  return (
    <>
      {showCard && (
        <div
          className={style.overlay}
          onClick={() => dispatch(detailsCardActions.closeCard())}
        ></div>
      )}
    </>
  );
};

export default Overlay;
