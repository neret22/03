import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ todos }) => {

    return (
        <div className="container mt-3 pt-3">
            <div className="w-75 mx-auto border border-1 border-primary shadow p-2 rounded-2">
                <ul className="list-group">
                    {todos.map((t, id) => <TodoItem
                        key={id}
                        todo={t}
                    />)}
                </ul>
            </div>
        </div>
    )
}



export default TodoList;