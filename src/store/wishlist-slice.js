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

    addItem(state, action) {
      const newItem = action.payload;
      //   const existingItem = state.wishlists.find(
      //     (item) => item.id === newItem.id
      //   );
      //   if (!existingItem) {
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
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
