import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {

  const todos = useSelector(state => state.todo.todos)

  return (
    <div>
      {todos.map((todo) => {
          return <Todo todo={todo}/>
      })}
      </div>
  )
}

export default TodoList