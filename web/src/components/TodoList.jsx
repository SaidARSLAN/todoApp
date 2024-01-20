import React, { useContext, useEffect, useState } from 'react'
import  Todo  from '../components/Todo'
import Table from 'react-bootstrap/Table'
import GlobalContext from '../context/MainContext'
const TodoList = () => {

    const {todos} = useContext(GlobalContext)
  return (
      <Table striped bordered hover variant='white' className='mt-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{todos.map((todo,idx) => <Todo todo={todo} idx={idx} key={todo + todo.description}/>)}</tbody>
      </Table>
  )
}

export default TodoList