import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: 0,
  },
  reducers: {
    addtask: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    deletetask: (state) => {
      state.value -= 1
    },       
  },
})

// Action creators are generated for each case reducer function
export const { addtask, deletetask } = taskSlice.actions;

export default taskSlice.reducer