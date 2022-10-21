import "./App.css";
import { Fragment, useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { detailsCardActions } from "./store/details-card-slice";
import useHttp from "./hooks/use-http";
const App = () => {
  const dispatch = useDispatch();
  const { sendRequest: fetchProducts } = useHttp();

  useEffect(() => {
    const transformData = (data) => {
      console.log(data);
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
    fetchProducts(
      {
        url: "https://dummyjson.com/products",
      },
      transformData
    );
  }, [fetchProducts, dispatch]);
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export default App;
