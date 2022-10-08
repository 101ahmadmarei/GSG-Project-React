import style from "./HomeScreen.module.css";
import Head from "./Head";
import Navbar from "./Navbar";
import Body from "./Body";
import NavMobile from "./NavMobile";
const HomeScreen = () => {
  return (
    <div>
      <Head />
      <NavMobile />
      <Navbar />
      <Body />
    </div>
  );
};
export default HomeScreen;
