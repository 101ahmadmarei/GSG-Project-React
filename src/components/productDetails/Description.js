import React from "react";
import style from "./Description.module.css";
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const Description = () => {
  const images = [
    { img: "/assets/images/D1.png", desc: "Lorem ipsum dolor sit amet" },
    { img: "/assets/images/D2.png", desc: "Lorem ipsum dolor sit amet" },
    { img: "/assets/images/D1.png", desc: "Lorem ipsum dolor sit amet" },
  ];
  return (
    <div className={style.description}>
      <img src="/assets/images/D0.png" alt="img" className={style.first} />
      <article>
        <p>
          I have taste grilled meats around the world. Before i will guide you
          to the various technologies (gas barbecues, charcoal barbecues,
          Mongolian, sauces, recipes ) i will tell you about the Greek way.
        </p>
        <p>{text}</p>
        <div className={style.images}>
          {images.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="img" />
              <p>{item.desc}</p>{" "}
            </div>
          ))}
        </div>
      </article>
      <footer className={style.footer}>
        <p>{text}</p>
      </footer>
    </div>
  );
};

export default Description;
