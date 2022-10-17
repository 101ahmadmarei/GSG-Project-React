import "./App.css";
import { Fragment, useState, useEffect, useCallback } from "react";
import Home from "./pages/Home";
const App = () => {
  const [products, setProducts] = useState([]);
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
    setProducts(loadedProducts);
  };
  useEffect(() => {
    fetchProductsHandler();
  }, []);
  return (
    <Fragment>
      <Home Info={products} />
    </Fragment>
  );
};

export default App;
