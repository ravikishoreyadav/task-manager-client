import { createSlice } from '@reduxjs/toolkit';

export const sectionSlice = createSlice({
  name: 'section',
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
export const { addSection, deleteSection } = sectionSlice.actions;

export default sectionSlice.reducer