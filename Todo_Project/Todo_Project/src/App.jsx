import { useState,useEffect } from 'react'

import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './Components'


function App() {
  const [todos, settodos] = useState([])

  const addtodo=(todo)=>
  (
      settodos((prev)=>[...prev,{id:Date.now(),...todo}])
  )
  const updatetodo=(id,todo)=>{
      settodos((prev)=>prev.map((prevtodo)=>{prevtodo.id === id ? todo : prevtodo }))
  }

  const deletetodo= (id)=>{
      settodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  
  const togglecomplete=(id) =>{
      settodos((prev)=>(prev.map((prevtodo)=>prevtodo.id===id? {...prevtodo,completed:!prevtodo.completed} :prevtodo)))

  }


  useEffect(() => {
    
    const todos=JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length>0)
    {
      settodos(todos)
    }

  }, [])

  useEffect(() => {
    
    localStorage.setItem("todos",JSON.stringify(todos))
    
  }, [todos])
  
  


  return (
    <TodoProvider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todos)=>(
            
              <div key={todos.id} 
              className='w-full'
              >
                <TodoItem todo={todos}/>


              </div>  
            ))}
        </div>
    </div>
    </div>

    </TodoProvider>
  )
}

export default App
