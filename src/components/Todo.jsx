import React from 'react'

export default function Todo({todo,comHandle,delHandle}) {

    function onChange(){
        comHandle(todo.id)
    }
    function onClick(){
        delHandle(todo.id)
    }
    return (
        <div className="todo">
            <input type="checkbox" onChange={onChange}/>
            <label className={todo.completed ? 'line-through':''}>
                {todo.name}
            </label>
            <button onClick={onClick}>Delete</button>
        </div>
    )
}
