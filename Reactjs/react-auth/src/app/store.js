import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Auth/userSlice";

// const rootReducer = {
//   count: counterReducer,
// };

////https://2kvn.com/react-gioi-thieu-tong-quat-ve-redux-toolkit-p5f313739

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  extraReduces: {},
});
export default store;
