import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:3434/user/auth`, {
                email : email,
                password : password
        })
        .then(result => console.log("The user has been created",result))
        .catch(err => console.log(err))
        setEmail("")
        setPassword("")
        navigate("/profile")
    }

    return (
        <Container className='main-color'>
            <h1>Log In</h1>
            <Row className='roomfac'>
        <Form onSubmit={handleLogin}>
      
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
        Log In
      </Button>
    </Form>
            </Row>
    </Container>

    )
}

export default Login