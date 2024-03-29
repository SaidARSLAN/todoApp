import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext()


export const Provider = ({children}) => {

    const [todos, setTodos] = useState([])
    const [globalLoginToken, setGlobalLoginToken] = useState(null)
    const [userInformations, setUserInformations] = useState(null)

  useEffect(() => {
      axios.get("http://localhost:3434/todos")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  },[])
    
  const addTodo = (todo) => setTodos([...todos, todo])

  const deleteTodo = (id) => {
    
    axios.delete(`http://localhost:3434/todos/${id}`, {
      headers : {
        "x-auth-token" : globalLoginToken
      },
    })
    .then(result => {
        if (result.status === 200) {
          const afterDeletedTodos = todos.filter((todo) => todo.id !== id)
          setTodos(afterDeletedTodos)
        }
    })
    .catch(err => console.log(err))
  }
  const completeEdit = (id,title,description,isCompleted) => {
    axios.put(`http://localhost:3434/todos/${id}`,
    {
      id,
      title,
      description,
      isCompleted
    }
    ,
    {
      headers : {
        "x-auth-token" : globalLoginToken
      },
    }
    )
    .then(result => {
      if (result.status === 200) {

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
    })
    .catch(err => console.log(err))

      
    
  }
  const keepLoginToken = (data,user) => {
      setGlobalLoginToken(data)
      setUserInformations(user)
  }

  const clearCache = () => {

    setGlobalLoginToken(null)
    setUserInformations(null)

  }

    return (
        <GlobalContext.Provider value={{todos,addTodo,deleteTodo,completeEdit,keepLoginToken,
        globalLoginToken,userInformations,clearCache
        }}>
            {children}
        </GlobalContext.Provider>
    )

}


export default GlobalContext