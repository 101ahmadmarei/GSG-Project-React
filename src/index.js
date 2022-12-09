import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <SnackbarProvider>
      <BrowserRouter>
        <Provider store={store}>
          {/* <React.StrictMode> */}
          <App />
          {/* </React.StrictMode> */}
        </Provider>
      </BrowserRouter>
    </SnackbarProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
