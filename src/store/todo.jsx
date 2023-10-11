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
        },
        DELETE_TODO : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        EDIT_TODO : (state,action) => {
                state.todos = state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            title: action.payload.data
                    }
                        }
                        else {
                            return todo;
                        }
                })
        }
    }
})

export const {ADD_TODO,DELETE_TODO,EDIT_TODO} = todos.actions

export default todos.reducer