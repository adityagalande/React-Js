import React from "react";

import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../features/todo/todoSlice";

const todos = useSelector((state) => (state.todos))
const dispatch = useDispatch();

function Todos() {
    return(
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => (dispatch(removeTodo(todo.id)))} >X</button>
                </li>
            ))}
        </>
    )
}

export default Todos;