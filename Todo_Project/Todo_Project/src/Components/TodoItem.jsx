import React, { useState } from 'react'
import { useTodo } from '../context';


function TodoItem({ todo }) {

    const [ isTodoEditable, setistodoeditable] = useState(false)
    const [todomsg,settodomsg]= useState()
     const {updatetodo,deletetodo, togglecomplete} = useTodo()

    const editTodo=()=>{
        updatetodo(todo.id,{...todo,todo:todomsg})
        setistodoeditable(false)
    }

    const togglecompleted =()=>{
        togglecomplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange= {togglecompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent  text-white rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
              
                onChange={(e) => settodomsg(e.target.value)}
                value={todomsg}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setistodoeditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
