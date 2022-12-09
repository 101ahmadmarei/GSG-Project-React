import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./details-card-slice";
import cartReducer from "./cart-slice";
import wishlistReducer from "./wishlist-slice";
const store = configureStore({
  reducer: {
    cardDetails: cardReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
export default store;
