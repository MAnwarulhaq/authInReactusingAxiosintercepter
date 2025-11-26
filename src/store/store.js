import { configureStore } from "@reduxjs/toolkit";
import { profileAPI } from "../service/getprofile";

export const store = configureStore({
  reducer:{
    [profileAPI.reducerPath] : profileAPI.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(profileAPI.middleware)
})

