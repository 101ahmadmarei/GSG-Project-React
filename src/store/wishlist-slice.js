import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlists: [], showWishlist: false, totalQuantity: 0 },
  reducers: {
    openWishlist(state, action) {
      state.showWishlist = true;
    },
    closeWishlist(state, action) {
      state.showWishlist = false;
    },
    replaceWishlist(state, action) {
      state.wishlists = action.payload.wishlists || [];
      state.totalQuantity = action.payload.totalQuantity;
    },

    addItem(state, action) {
      const newItem = action.payload;

      state.wishlists.push({
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
      });
      state.totalQuantity++;
      //   }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.wishlists = state.wishlists.filter((item) => item.id !== id);
      state.totalQuantity--;
    },
    clearWishlist(state, action) {
      state.wishlists = [];
      state.totalQuantity = 0;
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
