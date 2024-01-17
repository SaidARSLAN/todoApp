import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  Todo  from '../components/Todo'

const TodoList = () => {

  const [todos, setTodos] = useState([])
  useEffect(() => {
      axios.get("http://localhost:3434/todos")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  },[])

  return (
    <div>{
        todos.map((todo) => <Todo todo={todo} key={todo + todo.description}/>)
      }</div>
  )
}

export default TodoList