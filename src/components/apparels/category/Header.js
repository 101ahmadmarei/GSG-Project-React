import React from "react";
import style from "./Header.module.css";
import FormControlMUI from "./FormControlMUI";
import useWindowDimensions from "../../../hooks/use-window-dimensions";

const Header = ({ onSort, sort, categories, onFilter, filter }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={style.header}>
      <h3>Women</h3>
      {width < 1024 && (
        <FormControlMUI
          onClick={onFilter}
          currentValue={filter}
          InputLabel="Apparels..."
          items={categories}
          ButtonText="Filter By"
        />
      )}
      <FormControlMUI
        onClick={onSort}
        currentValue={sort}
        InputLabel="Sort By..."
        items={["Title", "Price", "Rating"]}
        ButtonText="Sort By"
      />
    </div>
  );
};

export default Header;
