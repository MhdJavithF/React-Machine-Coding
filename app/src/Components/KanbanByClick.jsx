import React, { useState } from 'react'
import { Column } from './Column';

const KanbanByClick = () => {
    const [todo, setTodo] = useState(["task 1","task 2", "task 3"]);
    const [inprogress, setInprogress] = useState(["task 4","task 5"]);
    const [completed, setCompleted] = useState(["task 6"]);

    const handleMove = (task, from, to, setTO, setFrom ) => {
        setFrom(from.filter( t => t!== task ));
        setTO([...to, task]);
    }
  return (
    <div style={{display:'flex', gap:"20px"}}>
        <Column title="To Do" tasks={todo} onMove={task => handleMove(task, todo, inprogress, setInprogress, setTodo)} />
        <Column title="Inprogress" tasks={inprogress} onMove={task => handleMove(task, inprogress, completed, setCompleted, setInprogress)} />
        <Column title="Completed" tasks={completed} />
    </div>
  )
}

export default KanbanByClick