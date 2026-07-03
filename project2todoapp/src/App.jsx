import React, { useState } from 'react'

const App = () => {
  const [task , setTask ] = useState("");
  const [todos , setTodos] = useState([]);
  const addTodo = ()=>{
     if(task.trim()==="") return ; 
     setTodos([...todos , task]);
     setTask("");
  }
  const deleteTodo=(index)=>{
       const newTodo = todos.filter((_,i)=>i !== index);
       setTodos(newTodo);
  }
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
       <div className='bg-white p-6 rounded-lg shadow-md w-96'>
             <h1 className='text-2xl font-bold text-center mb-4'>Todo App</h1>
             <div className='flex gap-2 mb-4'>
              <input className='border p-2 flex-1 rounded' type="text" placeholder='Enter Task...' onChange={(e)=>setTask(e.target.value)}
              value={task}
              />
              <button onClick={addTodo} className='bg-blue-500 text-white px-4 rounded hover:bg-blue-600'>Add</button>
             </div>
             <ul>
                 
             </ul>
        </div> 
    </div>
  )
}

export default App
