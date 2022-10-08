import React from "react";
import Categories from "./Categories";
import Partners from "./Partners";
import ContactUs from "./ContactUs";
import Subscribe from "./Subscribe";
import Signature from "./Signature";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.group}>
        <Categories />
        <Partners />
      </div>
      <ContactUs />
      <Subscribe />
      <Signature />{" "}
    </div>
  );
};

export default Footer;
