import {createContext,useContext}from "react"

export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo Msg",
            completed:false
        }
    ],
    addtodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(Todocontext)
}
export const TodoProvider = Todocontext.Provider