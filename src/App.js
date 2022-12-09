import "./App.css";
import React, { useContext } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Apparels from "./pages/Apparels";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./store/auth-context";
import PageNotFound from "./pages/NotFound";
const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />}>
          {!authCtx.isLoggedIn && <Route path="Login" element={<Login />} />}
          {!authCtx.isLoggedIn && <Route path="SignUp" element={<SignUp />} />}
        </Route>
        <Route path="/Apparels" element={<Apparels />} />
        <Route path="/Home/:productId" element={<ProductDetails />} />
        <Route path="/Apparels/:productId" element={<ProductDetails />} />
        <Route path="/not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Layout>
  );
};

export default App;
/*
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
  }, [fetchApparels, dispatch]);*/
