import React from "react";
import style from "./OtherInfo.module.css";
const OtherInfo = ({ employment, partnership, collab }) => {
  return (
    <div className={style.otherInfo}>
      <div>
        <h3>Artisan Employment</h3>
        <p>{employment}</p>
      </div>
      <div>
        <h3>Partnership</h3>
        <p>{partnership}</p>
      </div>
      <div>
        <h3>In collab</h3>
        <p>{collab}</p>
      </div>
    </div>
  );
};

export default OtherInfo;
