import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./details-card-slice";
import cartReducer from "./cart-slice";
const store = configureStore({
  reducer: { cardDetails: cardReducer, cart: cartReducer },
});
export default store;
