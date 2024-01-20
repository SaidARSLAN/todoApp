import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [nameSurname, setNameSurname] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleCreateUser = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:3434/user/create`, {
                name : nameSurname,
                email : email,
                password : password
        })
        .then(result => console.log("The user has been created",result))
        .catch(err => console.log(err))
        setNameSurname("")
        setEmail("")
        setPassword("")
        navigate("/login")
    }

    return (
        <Container className='main-color'>
            <h1>Register</h1>
            <Row className='roomfac'>
        <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name/Surname</Form.Label>
        <Form.Control
        type="text"
        placeholder="Name and Surname"
        value={nameSurname}
        onChange={e => setNameSurname(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)} 
         />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Row>
    </Container>

    )
}

export default Register