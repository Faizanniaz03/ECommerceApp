import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
    price:0
}
export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        console.log("🚀 ~ action:", action)
        state.price = action.payload * state.value
        console.log("🚀 ~ state.price:", state.price)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
  export default counterSlice.reducer