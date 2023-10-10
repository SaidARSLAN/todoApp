import { Button, TextField } from '@mui/material'
import React from 'react'

const AddTodo = () => {
  return (
    <section className='addTodo'>
        <TextField variant='standard' label='Title' size='small' className='addText'/>
        <Button variant='contained' className='addButton' size='large'>Add</Button>
    </section>
  )
}

export default AddTodo