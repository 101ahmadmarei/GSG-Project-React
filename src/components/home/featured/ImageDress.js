import React from "react";
import style from "./ImageDress.module.css";
import { useDispatch } from "react-redux";
import { detailsCardActions } from "../../../store/details-card-slice";
import Button from "../../global/Button";
const ImageDress = ({ img, status, isNew, id }) => {
  const dispatch = useDispatch();

  const buttonClasses = status ? "featured" : "displayFeatured";

  const openCardHandler = (id) => {
    dispatch(detailsCardActions.openCard(id));
  };
  return (
    <div className={style.component}>
      <img className={style.imageDress} src={img} alt="img" />
      <div className={status ? style.overlay : ""}></div>
      <Button id={id} className={buttonClasses} makeAction={openCardHandler}>
        Quick View
      </Button>
    </div>
  );
};

export default ImageDress;
