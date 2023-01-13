import React from "react";
import Details from "../components/productDetails/Details";
import Description from "../components/productDetails/Description";
import AsSeen from "../components/productDetails/AsSeen";
import Review from "../components/productDetails/Review";
import SameCategory from "../components/productDetails/SameCategory";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsCardActions } from "../store/details-card-slice";
const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { sendRequest: fetchProduct, isLoading, error } = useHttp(true);
  const Data = useRef({});
  const { productId } = params;

  useEffect(() => {
    const transformData = (data) => {
      if (!data) navigate("/not-found");
      console.log(data);
      Data.current = data;
      console.log(Data.current);
    };
    fetchProduct(
      {
        url: `https://test-4c533-default-rtdb.firebaseio.com/products/${productId}.json`,
      },
      transformData
    );
  }, [fetchProduct, productId, navigate]);
  useEffect(() => {
    const transformData = (data) => {
      let loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: key,
          images: data[key].images,
          totalInfo: data[key].totalInfo,
        });
      }
      dispatch(detailsCardActions.productDetails(loadedProducts));
    };

    fetchProduct(
      {
        url: "https://test-4c533-default-rtdb.firebaseio.com/products.json",
      },
      transformData
    );
  }, [fetchProduct, dispatch]);

  return (
    <div>
      {isLoading && (
        <div className="centered">
          {" "}
          <LoadingSpinner />{" "}
        </div>
      )}
      {error && <p className="centered focused">{error}</p>}
      {!isLoading && !error && (
        <>
          <Details data={Data.current} /> <Description />
          <AsSeen />
          <Review />
          <SameCategory />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
