import { createSlice } from '@reduxjs/toolkit'
import { Card } from 'react-bootstrap';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: '',
  },
  reducers: {
    addtask: (state) => {
      
      state.value = 'This is added text'
    },
    deletetask: (state) => {
      state.value = ''
    },       
  },
})

// Action creators are generated for each case reducer function
export const { addtask, deletetask } = taskSlice.actions;

export default taskSlice.reducer