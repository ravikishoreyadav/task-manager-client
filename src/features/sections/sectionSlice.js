import { createSlice } from '@reduxjs/toolkit';

export const sectionSlice = createSlice({
  name: 'section',
  initialState: [
        { id: 1, title: 'To DO'},
        { id: 2, title: 'In Progress'},
    ],
  reducers: {
    addSection: (state, action) => {      
      state.value = action.payload
    }     
  },
})

// Action creators are generated for each case reducer function
export const { addSection } = sectionSlice.actions;

export default sectionSlice.reducer