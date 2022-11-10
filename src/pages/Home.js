import React from "react";
import HomeScreen from "../components/home/homeScreen/HomeScreen";
import Featured from "../components/home/featured/Featured";
import About from "../components/home/about/About";
import Explore from "../components/home/explore/Explore";
import Shop from "../components/home/shop/Shop";
import Videos from "../components/home/videos/Videos";
import AsSoon from "../components/home/asSeen/AsSoon";
import FullProductDetails from "../components/home/fullProduct/FullProductDetails";
import { useSelector } from "react-redux";
import Overlay from "../UI/Overlay";
import ScrollToTop from "react-scroll-to-top";
function Home() {
  const showCard = useSelector((state) => state.cardDetails.showCard);
  return (
    <div>
      <ScrollToTop smooth />
      <Overlay />
      {showCard && <FullProductDetails />}
      <HomeScreen />
      <Featured />
      <About />
      <Explore />
      <Shop />
      <Videos />
      <AsSoon />
    </div>
  );
}

export default Home;
