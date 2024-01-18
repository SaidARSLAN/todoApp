import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext()


export const Provider = ({children}) => {

    const [todos, setTodos] = useState([])
  useEffect(() => {
      axios.get("http://localhost:3434/todos")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  },[])
    const addTodo = (todo) => setTodos([...todos, todo])

  const deleteTodo = (id) => {
    const afterDeletedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(afterDeletedTodos)
    axios.delete(`http://localhost:3434/todos/${id}`)
    .then(result => console.log("TODO HAS BEEN DELETED"))
    .catch(err => console.log(err))
  }

    return (
        <GlobalContext.Provider value={{todos,addTodo,deleteTodo}}>
            {children}
        </GlobalContext.Provider>
    )

}


export default GlobalContext