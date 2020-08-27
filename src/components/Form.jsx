import React,{useRef} from 'react'

export default function Form({addTodo}) {
    const todoNameRef = useRef()
    function onClick() {
        addTodo(todoNameRef.current.value)
        todoNameRef.current.value = ''
    }
    return (
        <>
            <form>
                <label htmlFor="name">Todo</label>
                <input ref={todoNameRef} type="text" name="name"/>
            </form>
            <button onClick={onClick}>Add</button>
            <hr/>
        </>
    )
}
