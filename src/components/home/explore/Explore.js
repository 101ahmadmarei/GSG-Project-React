import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Title from "../../global/Title";
import style from "./Explore.module.css";
import Info from "./Info";
import Button from "../../global/Button";
const Explore = () => {
  const info = [
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "Connected Clothing: Raye Padit",
      text: "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. ",
      img: "/assets/images/E2.png",
    },
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "Kérastase: A Collaboration",
      img: "/assets/images/E1.png",
    },
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "Jaclynn Seah",
      text: "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
    },

    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "Remarkable Resilience: Grace Kim",
      text: "A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
    },
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "How To Wear The Lounge Lunghi",
      img: "/assets/images/E3.png",
    },
  ];

  return (
    <div className={style.explore}>
      <Title Title="Explore" />
      <Box sx={{ width: 1 }}>
        <Box className={style.grid}>
          {info.map((inf, i) => (
            <Info index={i} key={i} news={inf} />
          ))}
        </Box>
      </Box>
      <Button className="explore">See the journal</Button>
    </div>
  );
};

export default Explore;
