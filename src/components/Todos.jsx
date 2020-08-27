import React from 'react'
import Todo from './Todo'

export default function Todos({todos,comHandle,delHandle}) {
    return (
        <>
            {todos.map(todo=>(
                <Todo todo={todo} delHandle={delHandle} comHandle={comHandle} key={todo.id} />
            ))}
        </>
    )
}
