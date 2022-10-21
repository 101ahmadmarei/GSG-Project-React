import React from "react";
import HomeScreen from "../components/home/homeScreen/HomeScreen";
import Featured from "../components/home/featured/Featured";
import About from "../components/home/about/About";
import Explore from "../components/home/explore/Explore";
import Shop from "../components/home/shop/Shop";
import Videos from "../components/home/videos/Videos";
import AsSoon from "../components/home/asSeen/AsSoon";
import Footer from "../components/home/footer/Footer";
import FullProductDetails from "../components/home/fullProduct/FullProductDetails";
import { useSelector } from "react-redux";
import Overlay from "../UI/Overlay";
function Home() {
  const showCard = useSelector((state) => state.cardDetails.showCard);
  return (
    <div>
      <Overlay />
      {showCard && <FullProductDetails />}
      <HomeScreen />
      <Featured />
      <About />
      <Explore />
      <Shop />
      <Videos />
      <AsSoon />
      <Footer />
    </div>
  );
}

export default Home;
