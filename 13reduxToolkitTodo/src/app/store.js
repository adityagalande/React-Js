import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

//store is created
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});