import { createSlice,nanoid } from "@reduxjs/toolkit" ;

const initialState = {
    todos:[
        
    {
        id:1,
        text:"Hello World"
    
    }]
}

export const Todoslice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo: (state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)

        },
        removetodo:(state,action)=>{

            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)

        },
        updatetodo:(state,action)=>{
            state.todos= 
            
        },

    }

})


export const {addtodo,removetodo} = Todoslice.actions

export default Todoslice.reducer