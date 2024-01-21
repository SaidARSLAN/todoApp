import React, { useContext, useEffect, useState } from 'react'
import  Todo  from '../components/Todo'
import Table from 'react-bootstrap/Table'
import GlobalContext from '../context/MainContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TodoList = () => {

    const {todos} = useContext(GlobalContext)
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
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
        </Col>
      </Row>
    </Container>
  )
}

export default TodoList