import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  Todo  from '../components/Todo'
import Table from 'react-bootstrap/Table'
const TodoList = () => {

  const [todos, setTodos] = useState([])
  useEffect(() => {
      axios.get("http://localhost:3434/todos")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  },[])

  return (
      <Table striped bordered hover variant='white' className='mt-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{todos.map((todo,idx) => <Todo todo={todo} idx={idx} key={todo + todo.description}/>)}</tbody>
      </Table>
  )
}

export default TodoList