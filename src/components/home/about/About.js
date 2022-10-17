import React from "react";
import ImageAbout from "./ImageAbout";
import Text from "./Text";
import Title from "../../global/Title";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.about}>
      <Title Title={"About Matter"} />
      <div className={style.content}>
        <ImageAbout />
        <Text />
      </div>
    </div>
  );
};

export default About;
