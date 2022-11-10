import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FilterSide from "./FilterSide";
import ImagesSide from "./ImagesSide";
import Header from "./Header";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import style from "./Category.module.css";
const Category = () => {
  const apparels = useSelector((state) => state.cardDetails.apparels);
  const { width } = useWindowDimensions();
  const [category, setCategory] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    setCategory(apparels);
  }, [apparels]);

  // get unique categories
  const categories = apparels
    .map((item) => item.category)
    .filter((item, index, self) => self.indexOf(item) === index);

  // filter apparels by category
  const filterApparels = (category = "") => {
    setFilter(category);
    if (!category) {
      setCategory(apparels);
    } else setCategory(apparels.filter((item) => item.category === category));
  };

  const changeSortType = (type) => {
    setSort(type);
  };

  const images = category.map((item) => {
    return {
      image: item.image,
      title: item.title,
      price: item.price,
      rating: item.rating,
      isNew: false,
    };
  });

  if (sort) {
    if (sort === "rating" || sort === "price") {
      images.sort((a, b) => b[sort] - a[sort]);
    } else if (sort === "title") {
      images.sort((a, b) => b[sort].localeCompare(a[sort]));
    }
  }

  return (
    <div className={style.category}>
      <Header
        onSort={changeSortType}
        sort={sort}
        categories={categories}
        onFilter={filterApparels}
        filter={filter}
      />
      <article>
        {width > 1023 && (
          <FilterSide categories={categories} onFilter={filterApparels} />
        )}
        <ImagesSide images={images} />
      </article>
    </div>
  );
};

export default Category;
