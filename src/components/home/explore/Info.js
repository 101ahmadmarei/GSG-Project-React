import React from "react";
import Box from "@mui/material/Box";
import Date from "./Date";
import Text from "./Text";
import Img from "./Img";
import Title from "./Title";
import style from "./Info.module.css";
const Info = ({ news, index }) => {
  const { date, title, text, img } = news;

  return (
    <Box
      // item
      className={style.info}
      style={{
        padding: "5px",
        height: "280px",
        gridArea: `c${index + 1}`,
        marginBottom: index === 0 ? "50px" : "0",
      }}
    >
      <Date date={date} />
      <Title title={title} index={index} />
      {!!text && <Text text={text} />}
      {!!img && <Img img={img} index={index} />}
    </Box>
  );
};

export default Info;
// const myTags = (
//   <>
//     {" "}
//     {text ? (
// !img ? (
//         <Text text={text} />
//       ) : (
//         <>
//           <Text text={text} />
//           <Img img={img} index={index} />
//         </>
//       )
//     ) : (
//       <Img img={img} index={index} />
//     )}
//   </>
// );
