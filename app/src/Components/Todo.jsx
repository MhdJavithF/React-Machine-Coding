import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState(null);

    useEffect(()=>{
        async function fetchFn(){
            const response = await fetch("https://dummyjson.com/todos");
            const datas = await response.json();
            setTodos(datas.todos);
        }
        fetchFn();
    },[]);
    
    // console.log(todos);

    const handleDelete = (indx) => {
        const updatedTodos = todos.filter((t,i) => i !== indx);
        setTodos(updatedTodos);
        console.log(indx);
    }

  return (
    <div className='animated-bg'>
        <h1>TODO List</h1>
        {todos?.map((t,idx) => (
            <div key={t.id}>
                <span style={{padding:'20px', fontSize: '20px', color: 'white'}}>{t.todo}</span>
                <button onClick={()=>{handleDelete(idx)}}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Todo