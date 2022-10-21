import React from "react";
import style from "./ImageDress.module.css";
import { useDispatch } from "react-redux";
import { detailsCardActions } from "../../../store/details-card-slice";
const ImageDress = ({ img, status, isNew, id }) => {
  const dispatch = useDispatch();

  const buttonClasses = status ? style.button : style.display;
  return (
    <div className={style.component}>
      <img className={style.imageDress} src={img} alt="img" />
      <div className={status ? style.overlay : ""}></div>
      <button
        id={id}
        className={buttonClasses}
        src="/assets/images/Button/Primary/M.png"
        alt="img"
        onClick={(event) =>
          dispatch(detailsCardActions.openCard(event.target.id))
        }
      >
        Quick View
      </button>
    </div>
  );
};

export default ImageDress;
