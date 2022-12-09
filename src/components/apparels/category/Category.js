import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import FilterSide from "./FilterSide";
import ImagesSide from "./ImagesSide";
import Header from "./Header";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import style from "./Category.module.css";
import LoadingSpinner from "../../../UI/LoadingSpinner";

const Category = ({ isLoading, error }) => {
  const apparels = useSelector((state) => state.cardDetails.productDetails);
  const { width } = useWindowDimensions();
  const [category, setCategory] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const MyProducts = useRef([]);

  useEffect(() => {
    if (apparels && apparels.length > 0) {
      MyProducts.current = apparels.map((item) => {
        return {
          id: item.id,
          img: +item.id !== 4 ? item.images[0] : item.images[1],
          title: item.totalInfo.title,
          price: item.totalInfo.price,
          rating: item.totalInfo.rating,
          category: item.totalInfo.otherInfo.category,
          isNew: true,
        };
      });
      setCategory(MyProducts.current);
    }
  }, [apparels]);

  // get unique categories
  const categories = MyProducts.current
    .map((item) => item.category)
    .filter((item, index, self) => self.indexOf(item) === index);

  // filter apparels by category
  const filterApparels = (currentCategory = "") => {
    console.log(currentCategory);
    setFilter(currentCategory);
    if (!currentCategory) {
      setCategory(MyProducts.current);
    } else {
      setCategory(
        MyProducts.current.filter((item) => item.category === currentCategory)
      );
    }
  };

  const changeSortType = (type) => {
    setSort(type.toLowerCase());
    console.log(type);
  };

  const images = category.map((item) => {
    return {
      id: item.id,
      image: item.img,
      title: item.title,
      price: item.price,
      rating: item.rating,
      isNew: item.isNew,
    };
  });

  if (sort === "rating" || sort === "price") {
    console.log(sort + 1);

    images.sort((a, b) => b[sort] - a[sort]);
  } else if (sort === "title") {
    images.sort((a, b) => b[sort].localeCompare(a[sort]));
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
        {isLoading && <LoadingSpinner />}
        {error && <p>{error}</p>}
        {!isLoading && !error && <ImagesSide images={images} />}
      </article>
    </div>
  );
};

export default Category;
