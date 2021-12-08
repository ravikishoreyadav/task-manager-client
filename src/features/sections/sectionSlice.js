import { createSlice } from '@reduxjs/toolkit'
import { Card } from 'react-bootstrap';

export const sectionSlice = createSlice({
  name: 'task',
  initialState: [
        { name: 'To DO' },
        { name: 'In Progress' },
    ],
  reducers: {
    addSection: (state, action) => {      
      state.value = action.payload
    },
    deleteSection: (state) => {
      state.value = ''
    },       
  },
})

// Action creators are generated for each case reducer function
export const { addtask, deletetask } = sectionSlice.actions;

export default sectionSlice.reducer