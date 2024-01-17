import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <p>{todo.title} - {todo.description}</p>
    </div>
  )
}

export default Todo