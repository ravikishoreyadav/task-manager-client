import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    {id: 1, section_id: 1, title: 'Fix bug', content: 'The bug that goes there should be fixed' },
    {id: 2, section_id: 3, title: 'Fix bug', content: 'The bug that goes there should be fixed' },
  ],
  reducers: {},
})

// Action creators are generated for each case reducer function
//export const { addtask, deletetask } = taskSlice.actions;

export default taskSlice.reducer