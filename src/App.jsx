import './App.css'
import AddTodo from './todo/AddTodo'
import Header from './todo/Header'
import TodoList from './todo/TodoList'

function App() {

  return (
    <main className='main'>
      <Header />
      <AddTodo />
      <TodoList />
    </main>
  )
}

export default App
