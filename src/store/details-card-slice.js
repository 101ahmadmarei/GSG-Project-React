import { createSlice } from "@reduxjs/toolkit";
const initialDetailsCardState = createSlice({
  name: "detailsCard",
  initialState: {
    showCard: false,
    idCard: null,
    productDetails: [],
    apparels: [],
  },
  reducers: {
    openCard(state, action) {
      state.showCard = true;
      state.idCard = action.payload;
    },
    closeCard(state) {
      state.showCard = false;
      state.idCard = null;
    },
    productDetails(state, action) {
      state.productDetails = action.payload;
    },
    apparels(state, action) {
      state.apparels = action.payload;
    },
  },
});

export const detailsCardActions = initialDetailsCardState.actions;

export default initialDetailsCardState.reducer;
