import React from "react";
import style from "./Subscribe.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
const Subscribe = () => {
  return (
    <div className={style.subscribe}>
      <h2>Subscribe to newsletter</h2>
      <div>
        {" "}
        <input type="email" placeholder="ENTER YOUR EMAIL" />
        <button>SUBSCRIBE</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <FacebookOutlinedIcon sx={{ color: "white", paddingRight: "5px" }} />
        <TwitterIcon sx={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Subscribe;
