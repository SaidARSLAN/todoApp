import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_TODO, EDIT_TODO } from '../store/todo';

const Todo = ({todo}) => {
    const [control, setControl] = useState(false);
    const user = useSelector(state => state.auth.user);
    const [editData, setEditData] = useState(todo.title);
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(DELETE_TODO(todo.id));
    }
    const handleEdit = () => {
        setControl(true)
    }
    const submitEdit = () => {
        setControl(false);
        dispatch(EDIT_TODO({"id":todo.id,"data":editData}));
    }
  return (
    <div className='todo'>
        {control ? <>
        <TextField variant='standard' label={editData ? '': "Edit"} size='small'  className='addText' value={editData} onChange={(event) => {setEditData(event.target.value)}}/>
        <Button variant='contained' className='addButton' size='large' onClick={submitEdit}>Edit</Button>
    </> : <div className='todo'><Typography variant='h5'>{todo.id}</Typography>
        <Typography variant='h4'>-</Typography>
        <Typography variant='h4'>{todo.title}</Typography>
        {user ? <div className='todo-button'>
            <Button variant='contained' color='error' size='small' onClick={handleDelete}>Delete</Button>
            <Button variant='contained' color='secondary' size='small' onClick={handleEdit}>Edit</Button>
        </div> : <></>}</div> }
        
        
    </div>
  )
}

export default Todo