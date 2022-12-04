import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 1,
  ///tự tạo ra 1 action creator vs  cai name o tren la =>{type:"counter/increase"}
  reducers: {
    increase(state, action) {
      ////k can phai ...state nhu reduce cũ
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
  },
});

const { actions, reducers } = counterSlice;
export const { increase, decrease } = actions;
export default counterSlice;
// export default reducers;
