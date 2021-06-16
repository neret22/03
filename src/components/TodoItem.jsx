import React from "react";


const TodoItem = ({todo, onComplete, onDelete}) => {

    
    return (
        <li className = "list-group-item d-flex justify-content-between align-items-center">
            <div className= {todo.completed? 'text-danger text-decoration-line-through ' :''}>{todo.title}</div>
            <div>
                <button 
                className ="btn btn-sm btn-primary mx-2"
                onClick = { () => {onComplete(todo.id)}}
                >
                Complete
                </button>
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