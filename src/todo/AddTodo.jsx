import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todo, { ADD_TODO } from '../store/todo'

const AddTodo = () => {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")

    const user = useSelector(state => state.auth.user);

  const handleClick = () => {
      dispatch(ADD_TODO({"title":title,"id":todos.length}));
  }

  return (
    <section className='addTodo'>
        <TextField variant='standard' label='Title' size='small' disabled={!user} className='addText' value={title} onChange={(event) => {setTitle(event.target.value)}}/>
        <Button variant='contained' className='addButton' size='large' disabled={!user || title == ""} onClick={handleClick}>Add</Button>
    </section>
  )
}

export default AddTodo