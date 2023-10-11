import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

const todos = createSlice({
    name : "todos",
    initialState,
    reducers :   {
        ADD_TODO : (state,action) => {
            state.todos = [...state.todos,action.payload]
            console.log(state.todos);
        }
    }
})

export const {ADD_TODO} = todos.actions

export default todos.reducer