import "./App.css";
import { Fragment, useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { detailsCardActions } from "./store/details-card-slice";
const App = () => {
  const dispatch = useDispatch();
  const fetchProductsHandler = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const loadedProducts = data.products.map((item) => {
      return {
        id: item.id,
        images: item.images,
        totalInfo: {
          title: item.title,
          description: item.description,
          price: item.price,
          rating: item.rating,
          otherInfo: {
            employment: "54 jobs",
            partnership: "Randall Armstrong",
            collab: "Augusta Mendoza",
          },
        },
      };
    });
    dispatch(detailsCardActions.productDetails(loadedProducts));
  };
  useEffect(() => {
    fetchProductsHandler();
  }, []);
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export default App;
