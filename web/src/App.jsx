import CreateTodo from "./components/CreateTodo"
import TodoList from "./components/TodoList"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/reset.css'
import { useEffect } from "react";
function App() {

  const getTodos = () => {
    return fetch("http://localhost:3434/todos")
    .then(result => result)
    .catch(err => console.error(err))
  }
  useEffect(() => {
    getTodos()
    .then(data => data.text())
    .then(result => console.log(result))
  },[])
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
