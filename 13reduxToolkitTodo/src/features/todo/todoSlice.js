import { createSlice, nanoid } from '@resuxjs/toolkit';

const initialState = {
    todos: [{id: 1, todo: "USA & CANADA"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducer: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            const id = action.payload;

            //Here override todos directly
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }

        updateTodo: (state, action) => {}
    }
});