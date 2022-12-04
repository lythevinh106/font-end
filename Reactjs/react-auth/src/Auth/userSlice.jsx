
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import userApi from "../api/userApi";
import StorageKeys from "../constants/storage-key";


/////createAsyncThunk lun tra ve 1 promise
export const register = createAsyncThunk(
    'user/register',
    // Declare the type your function argument here:
    async (payload) => {
        /////call api to register
        const data = await userApi.register(payload);


        ///save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt)
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

        return data.user;
    }
)



export const login = createAsyncThunk(
    'user/login',
    // Declare the type your function argument here:
    async (payload) => {
        /////call api to register
        const data = await userApi.login(payload);


        ///save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt)
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

        return data.user;
    }
)



const userSlice = createSlice({
    name: "user",
    initialState: {
        ////luu luon thong tin dang nhap tren redux lun khoi mat cong vao local storage
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {}

    }
    ,
    ///tự tạo ra 1 action creator vs  cai name o tren la =>{type:"counter/increase"}
    reducers: {

        logout(state) {

            localStorage.removeItem(StorageKeys.USER)
            localStorage.removeItem(StorageKeys.TOKEN)
            state.current = {}
        }

    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            ////action.payload la thuw cua createAsyncThunk tra ve
            state.current = action.payload

        }
        ,

        [login.fulfilled]: (state, action) => {

            state.current = action.payload

        }
    }
});

const { actions, reducer } = userSlice;
export const { logout } = actions;

export default userSlice;