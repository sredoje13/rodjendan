import { createSlice} from "@reduxjs/toolkit";
import { uploadImage } from "./asyncThunckAccount";
const initialState={
  status:"success"
}

const accountSLice= createSlice({
    name:'accounSlice',
    initialState,
    extraReducers:
        (builder)=>{
      builder
      .addCase(uploadImage.pending,(state,action)=>{
        state.status="loading"
      })
      .addCase(uploadImage.fulfilled,(state,action)=>{
        state.status="success"
      })
      .addCase(uploadImage.rejected,(state,action)=>{
        state.status="error"
        state.isError=true
      }
      )
        
    }

})
export default accountSLice
export const AccountActions=accountSLice.actions