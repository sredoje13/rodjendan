import {  configureStore } from "@reduxjs/toolkit";
import accountReducer from './accountSlice'
export const store=configureStore(
  {
    reducer:{
      accountSlice:accountReducer.reducer,
      
    }
  }
)

