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
  const completeEdit = (id,title,description,isCompleted) => {
    axios.put(`http://localhost:3434/todos/${id}`,
    {
      id,
      title,
      description,
      isCompleted
    })
    .then(result => console.log("TODO HAS BEEN UPDATED",result.data))
    .catch(err => console.log(err))

      const afterUpdatedTodos = todos.map((todo) => {
          if (todo.id === id) {
              return {
              id : id,
              title : title,
              description : description,
              isCompleted : isCompleted
            }
          }
          return todo
      })
      setTodos(afterUpdatedTodos)
      
  }
    return (
        <GlobalContext.Provider value={{todos,addTodo,deleteTodo,completeEdit}}>
            {children}
        </GlobalContext.Provider>
    )

}


export default GlobalContext