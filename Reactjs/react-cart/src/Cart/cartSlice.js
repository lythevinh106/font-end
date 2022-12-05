import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "counter",
  initialState: {
    showMiniCart: false,
    cartItems: [
      {
        id: 0,
        product: {},
        quantity: 0,
      },
    ],
  },
  ///tự tạo ra 1 action creator vs  cai name o tren la =>{type:"counter/increase"}
  reducers: {
    showMiniCart(state, action) {
      ////k can phai ...state nhu reduce cũ
      return (state.showMiniCart = true);
    },
    hideMiniCart(state, action) {
      return (state.showMiniCart = false);
    },
    addToCart(state, action) {
      const newItem = action.payload;
      newItem.quantity = Number.parseInt(action.payload.quantity);
      const index = state.cartItems.findIndex((x) => x.id == newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id == id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    RemoveFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id != idNeedToRemove);
    },
  },
});

const { actions, reducers } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  
  
  RemoveFromCart,
} = actions;
export default cartSlice.reducer;
// export default reducers;
