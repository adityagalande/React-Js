import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
            // localStorage.setItem("todo", state.todos)
        },

        removeTodo: (state, action) => {
            const id = action.payload;

            //Here override todos directly
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

//  register the todoSlice reducer in store so that we can update value in store 
export default todoSlice.reducer
