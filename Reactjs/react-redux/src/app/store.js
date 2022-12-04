import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Counter/counterSlice";
import TodoSlice from "../Todo/TodoSlice";

// const rootReducer = {
//   count: counterReducer,
// };

////https://2kvn.com/react-gioi-thieu-tong-quat-ve-redux-toolkit-p5f313739

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    todo: TodoSlice.reducer,
  },
});
export default store;
