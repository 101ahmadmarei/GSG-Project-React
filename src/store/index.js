import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./details-card-slice";
const store = configureStore({ reducer: { cardDetails: cartReducer } });
export default store;
