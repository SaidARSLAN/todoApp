import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import GlobalContext from '../context/MainContext';
import Modal from 'react-modal'
import Form from 'react-bootstrap/Form'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const Todo = ({todo,idx}) => {

  const {deleteTodo} = useContext(GlobalContext)
  const [isModalOpen, setIsOpenModal] = useState(false)

    const openModal = () => {
      setIsOpenModal(true)
    }
    const afterOpenModal = () => {
      subtitle.style.color = '#f00'
    }
    const closeModal = () => {
      setIsOpenModal(false)
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
      <Modal
      isOpen={isModalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Edit Current Todo'
      >
        <h3 className='text-center'>Edit</h3>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Update Todo Title..."
        name='title'
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control
        as="textarea"
        rows={4}
        name='description'
        placeholder='Update Todo Description...'
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
        </Form>
      </Modal>
    </tr>
  )
}

export default Todo