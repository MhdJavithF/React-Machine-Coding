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
    <div>
        <ul>
            {todos?.map((t,idx) => (
                <div key={t.id}>
                    <li>{t.todo}</li>
                    <button onClick={()=>{handleDelete(idx)}}>Delete</button>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Todo