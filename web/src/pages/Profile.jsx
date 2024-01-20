import CreateTodo from "../components/CreateTodo"
import TodoList from "../components/TodoList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const Profile = () => {

    return (
        <Container className="pt-5">
      <Row>
      <CreateTodo />
      <TodoList />
      </Row>
    </Container>
    )
}

export default Profile