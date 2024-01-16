import CreateTodo from "./components/CreateTodo"
import TodoList from "./components/TodoList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/reset.css'
function App() {

  return (
    <main className="main-color">
    <Container className="pt-5">
      <Row>
      <CreateTodo />
      </Row>
    </Container>
    </main>
  )
}

export default App
