import React from "react";
import style from "./Video.module.css";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

const Video = ({ desc, item }) => {
  return (
    <div className={style.video}>
      <div className={style.com}>
        <img src={item} alt="" className={style.img} />
        <PlayCircleOutlinedIcon
          sx={{
            position: "absolute",
            fontSize: "80px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            color: "white",
          }}
        />
      </div>
      <p className={style.desc}>{desc}</p>
    </div>
  );
};

export default Video;
