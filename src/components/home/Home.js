import React from "react";
import HomeScreen from "./homeScreen/HomeScreen";
import Featured from "./featured/Featured";
import About from "./about/About";
import Explore from "./explore/Explore";
import Shop from "./shop/Shop";
import Videos from "./videos/Videos";
import AsSoon from "./asSeen/AsSoon";
import Footer from "./footer/Footer";
function Home() {
  return (
    <div>
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
