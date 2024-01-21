import Col from "react-bootstrap/Col";
import CreateTodo from "../components/CreateTodo"
import TodoList from "../components/TodoList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import { useContext } from "react";
import GlobalContext from "../context/MainContext";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Link  } from 'react-router-dom'
import { IoMdExit } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
const Profile = () => {
  
    const {userInformations,clearCache} = useContext(GlobalContext)
    const handleLogout = () => {

      axios.post(`http://localhost:3434/user/logout`,)
      .then(result => {

        clearCache()

      })
      .catch(err => console.log(err))

    }
  

    return (
        <Container className="pt-5" style={{width:"100%"}}>
        <Row className="justify-content-end">
          <Col className="ms-auto mb-4" md={4} sm={12}>
          <Card style={{ width: '100%' }}>
          <Card.Body>
        <Card.Title>Welcome, {userInformations ?  userInformations.name : "anonymous"}</Card.Title>
        <Card.Text>
          {userInformations ?  userInformations.email : "unknown"}
        </Card.Text>
        {userInformations ?
         <Button variant="danger" onClick={handleLogout} style={{fontSize:"18px",letterSpacing:"1.2px"}}>Exit <IoMdExit size={25}/></Button> :
        <Link className="btn btn-primary" to='/login'>Log in <IoIosLogIn size={25}/></Link>
         }
      </Card.Body>
    </Card>
          </Col>
        </Row>
      <Row>
      <CreateTodo />
      <TodoList />
      </Row>
    </Container>
    )
}

export default Profile