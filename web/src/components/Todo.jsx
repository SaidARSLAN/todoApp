import React from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';

const Todo = ({todo,idx}) => {
  return (
    <tr>
      <td>{idx}</td>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <Stack direction='horizontal' gap={3}>
        <Button className='ms-auto'>Edit</Button>
        <Button variant='danger' >Delete</Button>
      </Stack>
    </tr>
  )
}

export default Todo