import React, {useContext} from "react";
import { TodoContext } from "../App";

import {Button} from './button'
const TodoItem = ({todo}) => {

    const {onComplete, onDelete} = useContext(TodoContext)

    return (
        <li className = "list-group-item d-flex justify-content-between align-items-center">
            <div className= {todo.completed? 'text-danger text-decoration-line-through ' :''}>{todo.title}</div>
            <div>
                <Button id = {todo.id}/>
                <button 
                className="btn btn-sm btn-danger"
                onClick = { () => {onDelete(todo.id)}}
                >
                Delete
                </button>
            </div>
        </li>

    )
}

export default TodoItem;