import { createSlice } from '@reduxjs/toolkit';

export const sectionSlice = createSlice({
  name: 'sections',
  initialState: [
        { id: 1, title: 'Backlog'},
        { id: 2, title: 'To DO'},
        { id: 3, title: 'In Progress'},
        { id: 4, title: 'Done'},
    ],
  reducers: {},
})

// Action creators are generated for each case reducer function
export const { addSection } = sectionSlice.actions;
export default sectionSlice.reducer