import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import GlobalContext from '../context/MainContext';

const Todo = ({todo,idx}) => {

  const {deleteTodo} = useContext(GlobalContext)
  const [isModalOpen, setIsOpenModal] = useState(false)

    const openModal = () => {
      setIsOpenModal(true)

    }
  return (
    <tr>
      <td>{idx}</td>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <Stack direction='horizontal' gap={3}>
        <Button className='ms-auto' onClick={openModal}>Edit</Button>
        <Button variant='danger' onClick={() => deleteTodo(todo.id)}>Delete</Button>
      </Stack>
    </tr>
  )
}

export default Todo