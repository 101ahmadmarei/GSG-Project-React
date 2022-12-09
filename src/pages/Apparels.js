import React, { Fragment, useEffect } from "react";
import HomeScreen from "../components/apparels/homeScreen/HomeScreen";
import Category from "../components/apparels/category/Category";
import { useSelector, useDispatch } from "react-redux";
import { detailsCardActions } from "../store/details-card-slice";
import useHttp from "../hooks/use-http";
import FullProductDetails from "../components/home/fullProduct/FullProductDetails";

const Apparels = () => {
  const dispatch = useDispatch();
  const { sendRequest: fetchProducts, isLoading, error } = useHttp();
  const showCard = useSelector((state) => state.cardDetails.showCard);

  useEffect(() => {
    const transformData = (data) => {
      let loadedProducts = [];
      console.log(data);
      for (const key in data) {
        loadedProducts.push({
          id: key,
          images: data[key].images,
          totalInfo: data[key].totalInfo,
        });
      }
      console.log(loadedProducts);
      dispatch(detailsCardActions.productDetails(loadedProducts));
      console.log("ahmad marei");
    };

    fetchProducts(
      {
        url: "https://gsgstore-e51b4-default-rtdb.firebaseio.com/products.json",
      },
      transformData
    );
  }, [fetchProducts, dispatch]);

  return (
    <Fragment>
      {showCard && <FullProductDetails />}
      <HomeScreen />
      <Category isLoading={isLoading} error={error} />
    </Fragment>
  );
};

export default Apparels;
