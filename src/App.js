import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  function addTodo(name){
        if(name === '')return
        const newTodo ={
          id:uuidv4(),
          name:name,
          completed:false
        }
        setTodos([...todos,newTodo])
    }

    function comHandle(id){
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.completed = !todo.completed
      setTodos(newTodos)
    }

    function delHandle(id){
      const newTodos = todos.filter(todo=> todo.id !== id)
      setTodos(newTodos)
    }

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos'))
      if(storedTodos) setTodos(storedTodos)

    }, [])

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])


  return (
    <div>
        <Form  addTodo={addTodo} />
        <Todos todos={todos} comHandle={comHandle} delHandle={delHandle} />
    </div>
  );
}

export default App;
