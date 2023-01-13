import "./App.css";
import React, { useContext, useEffect } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Apparels from "./pages/Apparels";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./store/auth-context";
import PageNotFound from "./pages/NotFound";
import useHttp from "./hooks/use-http";
import { Products } from "./ProductsJSON";
const App = () => {
  const authCtx = useContext(AuthContext);
  const { sendRequest } = useHttp();

  // useEffect(() => {
  //   for (var key in Products) {
  //     sendRequest(
  //       {
  //         url: "https://test-4c533-default-rtdb.firebaseio.com/products.json",
  //         method: "POST",
  //         body: Products[key],
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //       () => {}
  //     );
  //   }
  // }, [sendRequest]);
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
