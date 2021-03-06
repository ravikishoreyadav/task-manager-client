import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    {id: 1, section_id: 1, title: 'Increase Text Size', content: 'The bug that goes there should be fixed' },
    {id: 2, section_id: 2, title: 'Fix Error on load', content: 'The bug that goes there should be fixed' },
  ],
  reducers: {
    taskMoved(state, action){
      const { id, section_id } = action.payload
      const existingTask = state.find(task => task.id === id)
      if(existingTask){
        existingTask.section_id = section_id
      }
    },
    taskAdded(state, action){
      state.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { taskMoved, taskAdded } = taskSlice.actions;

export default taskSlice.reducer