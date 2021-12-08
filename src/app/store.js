import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/task/taskSlice';
import sectionReducer from '../features/sections/sectionSlice';

export default configureStore({
    reducer: {
        sections: sectionReducer,
        tasks: taskReducer,

    },
})