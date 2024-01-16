import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'

const CreateTodo = () => {
  return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todo Title</Form.Label>
        <Form.Control type="email" placeholder="Add Todo..." />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    )
}

export default CreateTodo