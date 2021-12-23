import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from '../features/sections/sectionSlice';
import taskReducer from '../features/tasks/taskSlice';

export default configureStore({
    reducer: {
        sections: sectionReducer,
        tasks: taskReducer,
    },
})


