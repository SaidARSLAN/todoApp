import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import GlobalContext from '../context/MainContext';
import Modal from 'react-modal'
import Form from 'react-bootstrap/Form'
import { MdDone } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import CloseButton from 'react-bootstrap/CloseButton';
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
  const {deleteTodo, completeEdit} = useContext(GlobalContext)
  const [isModalOpen, setIsOpenModal] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(todo.title)
  const [updatedDescription, setUpdatedDescription] = useState(todo.description)
  const [isCompleted, setIsCompleted] = useState(false)
    const openModal = () => { 
      console.log(todo.id)
      setIsOpenModal(true)
    }
    const afterOpenModal = () => {
      subtitle.style.color = '#f00'
    }
    const closeModal = () => {
      setIsOpenModal(false)
    }
    const handleEditSubmit = (event) => {
      event.preventDefault()
        completeEdit(todo.id,updatedTitle,updatedDescription,isCompleted)
        setIsOpenModal(false)
    }
  return (
    <tr>
      <td>{idx}</td>  
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.isCompleted ? <MdDone color='green' size={40}/> : "On Going..."}</td>
      <Stack direction='horizontal' gap={3}>
        <Button className='ms-auto' onClick={openModal}><FaEdit size={25}/></Button>
        <Button variant='danger' onClick={() => deleteTodo(todo.id)}><RiDeleteBin6Fill size={25}/></Button>
      </Stack>
      <Modal
      isOpen={isModalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Edit Current Todo'
      >
        <h3 className='text-center'>Edit</h3>
        <CloseButton className='float-end' onClick={closeModal}/>
        <Form onSubmit={handleEditSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Update Todo Title..."
        name='updatedTitle'
        value={updatedTitle}
        onChange={e => setUpdatedTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control
        as="textarea"
        rows={4}
        name='updatedDescription'
        placeholder='Update Todo Description...'
        value={updatedDescription}
        onChange={e => setUpdatedDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
          <Form.Check
          type='checkbox'
          label="Completed todo"
          value={todo.isCompleted}
          name='isComplete'
          checked={todo.isCompleted === true}
          onChange={e => setIsCompleted(e.target.checked)}
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