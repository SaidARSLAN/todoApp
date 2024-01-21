import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import GlobalContext from '../context/MainContext';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
const CreateTodo = () => {

    

    const {addTodo,globalLoginToken} = useContext(GlobalContext)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const createRandomNumber = () => {
      return Math.floor(Math.random() * 245)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const newId = Math.floor(Math.random() * 200) * createRandomNumber()
      axios.post('http://localhost:3434/todos',{
        id : newId,
        title : title,
        description : description,
        isCompleted : false
        },{

          headers : {
            "Access-Control-Allow-Origin": "*",
            "x-auth-token" : globalLoginToken
          },
        }
      )
      .then(result => {
        if (result.status === 200) {
          console.log("Todo has been sended",result.data)
          addTodo({
            id : newId,
            title,
            description,
            isCompleted : false
          })
          setTitle("")
          setDescription("")
        } 
      })
      .catch(err => console.error(err))
    }

  return (
    <Form onSubmit={handleSubmit}>
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
      <h1 className='mb-3 text-center'>Add Todo</h1>
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
  
        <Button variant="primary" type="submit" disabled={!globalLoginToken}>
          Submit
        </Button>
      </Col>
    </Row>
  </Form>
    )
}

export default CreateTodo