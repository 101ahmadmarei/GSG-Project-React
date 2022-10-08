import React from "react";
import style from "./Text.module.css";
const Text = () => {
  const content = [
    "Artisan Employment Days Created",
    "123456",
    "Countries Involved To Date",
    "India",
    "China",
    "Sri Lanka",
    "#MatterTribe",
    "12 designers",
    "12 Factories",
  ];

  const pre = (
    <h2 className={style.pre}>
      Our mission is threefold - to foster designer-artisan collaborations,
      inspire consumers to value provenance and process, and pioneer industry
      change and sustainability for rural textile communities.{" "}
    </h2>
  );

  return (
    <div className={style.text}>
      {pre}
      <h3>Artisan Employment Days Created</h3>
      <p>123456</p>
      <h3>Countries Involved To Date</h3>
      <p>
        <span>India</span>
        <span>China</span> <span>Sri Lanka</span>
      </p>
      <h3>#MatterTribe</h3>
      <p>
        <span>12 designers</span>
        <span>12 Factories</span>
      </p>
    </div>
  );
};

export default Text;
