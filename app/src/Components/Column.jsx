import React from 'react'

export const Column = ({title, tasks, onMove}) => {
  return (
      <div className='animated-bg'>
        <h3>{title}</h3>
        {tasks.map(task => (
            <div key={task} style={{
            border: "1px solid #ccc",
            padding: "6px",
            margin: "4px",
            cursor: "pointer",
          }} onClick={()=> onMove && onMove(task)}>
                {task}
            </div>
        ))}
    </div>
  )
}
