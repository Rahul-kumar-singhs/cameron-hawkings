import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'credential',
  initialState: {
   name:"Rahul",
   age: "20",
   address:"Bhopal",
   mobno:"8987016626",
   email:"asdf@gmail.com",
   designation:"Full stack Developer"
  },
  reducers: {

    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment,decrement,incrementByAmount } = counterSlice.actions

export default counterSlice.reducer