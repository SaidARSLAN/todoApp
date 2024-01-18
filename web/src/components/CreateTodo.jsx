import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import GlobalContext from '../context/MainContext';

const CreateTodo = () => {

    const {addTodo} = useContext(GlobalContext)
    const [id,setId] = useState(null)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const handleSubmit = (event) => {
      event.preventDefault()
      axios.post('http://localhost:3434/todos',
      {
        headers : {
          "Access-Control-Allow-Origin": "*"
        },
        id : 0,
        title : title,
        description : description,
        isCompleted : false
      })
      .then(result => {
        if (result.status === 200) {
          console.log("Todo has been sended",result.data)
          addTodo({
            id,
            title,
            description
          })
          setTitle("")
          setDescription("")
        } 
      })
      .catch(err => console.error(err))
    }

  return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todo Title</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Add Todo..."
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control
        as="textarea"
        rows={4}
        name='description'
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    )
}

export default CreateTodo