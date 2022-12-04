import { configureStore } from "@reduxjs/toolkit";
import cart from "../Cart/cartSlice";

const rootReducer = {
  cart: cart,
};

////https://2kvn.com/react-gioi-thieu-tong-quat-ve-redux-toolkit-p5f313739

const store = configureStore({
  reducer: rootReducer,
});
export default store;
