import React from "react";
import style from "./HomeScreen.module.css";
const HomeScreen = () => {
  return (
    <div className={style.homeScreen__container}>
      <div className={style.homeScreen}>
        <h1>Apparels</h1>
        <p>
          White Gold began gaining popularity in the early 1900’s as an
          alternative to platinum.{" "}
        </p>
      </div>
      <img src="/assets/images/F5.png" alt="" />
    </div>
  );
};

export default HomeScreen;
