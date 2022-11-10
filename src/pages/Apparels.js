import React, { Fragment } from "react";
import HomeScreen from "../components/apparels/homeScreen/HomeScreen";
import Category from "../components/apparels/category/Category";
const Apparels = () => {
  return (
    <Fragment>
      <HomeScreen />
      <Category />
    </Fragment>
  );
};

export default Apparels;
