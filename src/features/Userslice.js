import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            UserName:null
    },
        userInfo:{
            UserID:null
        },
    },
    reducers:{
        login:(state,action) =>{
            state.user = action.payload;
        },
        logout: (state) =>{
            state.user = {};
            state.user = {UserName:null};
            state.userInfo = {UserID:null};
        },
        userDetail:(state,action) =>{
            state.userInfo    = action.payload
        },
    }
})
export const {login,logout,userDetail} = userSlice.actions
export const selectUser = (state) => state.user;
export const selectUserData = (state) => state.UserID;
export default userSlice.reducer