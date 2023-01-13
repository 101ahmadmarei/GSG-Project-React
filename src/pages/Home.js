import React, { useEffect } from "react";
import HomeScreen from "../components/home/homeScreen/HomeScreen";
import Featured from "../components/home/featured/Featured";
import About from "../components/home/about/About";
import Explore from "../components/home/explore/Explore";
import Shop from "../components/home/shop/Shop";
import Videos from "../components/home/videos/Videos";
import AsSoon from "../components/home/asSeen/AsSoon";
import Overlay from "../UI/Overlay";
import ScrollToTop from "react-scroll-to-top";
import { useSelector, useDispatch } from "react-redux";
import { detailsCardActions } from "../store/details-card-slice";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import FullProductDetails from "../components/home/fullProduct/FullProductDetails";
import { Outlet, useParams } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();

  const { sendRequest: fetchProducts, isLoading, error } = useHttp();
  const showCard = useSelector((state) => state.cardDetails.showCard);
  // const dataRef=useRef();
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
      dispatch(detailsCardActions.productDetails(loadedProducts));
      console.log("ahmad marei");
    };

    console.log("king");
    fetchProducts(
      {
        url: "https://test-4c533-default-rtdb.firebaseio.com/products.json",
      },
      transformData
    );
  }, [fetchProducts, dispatch]);

  return (
    <div>
      <Outlet />
      <ScrollToTop smooth />
      {showCard && <FullProductDetails />}
      <Overlay />
      <HomeScreen />
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {error && <p className="centered focused">{error}</p>}
      {!isLoading && !error && <Featured />}
      <About />
      <Explore />
      <Shop />
      <Videos />
      <AsSoon />
    </div>
  );
}

export default Home;
