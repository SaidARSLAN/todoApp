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
    return (
        <GlobalContext.Provider value={{todos,addTodo}}>
            {children}
        </GlobalContext.Provider>
    )

}


export default GlobalContext