import React, { useContext } from "react";
import HomeScreen from "../components/home/homeScreen/HomeScreen";
import Featured from "../components/home/featured/Featured";
import About from "../components/home/about/About";
import Explore from "../components/home/explore/Explore";
import Shop from "../components/home/shop/Shop";
import Videos from "../components/home/videos/Videos";
import AsSoon from "../components/home/asSeen/AsSoon";
import Footer from "../components/home/footer/Footer";

function Home({ Info }) {
  return (
    <div>
      <HomeScreen />
      <Featured Info={Info} />
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
