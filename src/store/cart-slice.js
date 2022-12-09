import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    showCart: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    openCart(state, action) {
      state.showCart = true;
    },
    closeCart(state, action) {
      state.showCart = false;
    },
    addItem(state, action) {
      console.log("addItem");
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.quantity * newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity += newItem.quantity;
      state.totalAmount = state.totalAmount + newItem.quantity * newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
