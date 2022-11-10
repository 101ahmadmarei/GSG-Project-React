import "./App.css";
import { Fragment, useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { detailsCardActions } from "./store/details-card-slice";
import Cart from "./components/Cart/Cart";
import useHttp from "./hooks/use-http";
import Apparels from "./pages/Apparels";
import { cartActions } from "./store/cart-slice";
import Navbar from "./components/global/Navbar";
import Footer from "./components/home/footer/Footer";
const App = () => {
  const dispatch = useDispatch();
  const { sendRequest: fetchProducts } = useHttp();
  const { sendRequest: fetchApparels } = useHttp();
  const showCart = useSelector((state) => state.cart.showCart);
  // useEffect(() => {
  //   const transformData = (data) => {
  //     console.log(data);
  //     const loadedProducts = data.products.map((item) => {
  //       return {
  //         id: item.id,
  //         images: item.images,
  //         totalInfo: {
  //           title: item.title,
  //           description: item.description,
  //           price: item.price,
  //           rating: item.rating,
  //           otherInfo: {
  //             stock: item.stock,
  //             brand: item.brand,
  //             category: item.category,
  //           },
  //         },
  //       };
  //     });
  //     dispatch(detailsCardActions.productDetails(loadedProducts));
  //   };
  //   fetchProducts(
  //     {
  // url: "https://dummyjson.com/products",
  //       // url: "https://fakestoreapi.com/products",
  //     },
  //     transformData
  //   );
  // }, [fetchProducts, dispatch]);

  useEffect(() => {
    const transformData = (data) => {
      const loadedProducts = data.map((item) => {
        return {
          id: item.id,
          image: item.image,
          category: item.category,
          title: item.title,
          description: item.description,
          price: item.price,
          rating: item.rating,
        };
      });
      dispatch(detailsCardActions.apparels(loadedProducts));
    };
    fetchApparels(
      {
        url: "https://fakestoreapi.com/products",
      },
      transformData
    );
  }, [fetchApparels, dispatch]);

  return (
    <Fragment>
      <Navbar />
      {showCart && <Cart />}
      {/* <Home />  */}
      <Apparels />
      <Footer />
    </Fragment>
  );
};

export default App;
