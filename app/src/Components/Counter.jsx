import React, { useState } from 'react'

const Counter = () => {
    const [history, setHistory] = useState([0]);
    const [position, setPosition] = useState(0);
    const currentValue = history[position];

    const addVaules = (newValue) =>{
        setHistory([...history,newValue]);
        setPosition(position+1);    
    }
    console.log(history);
    
    const decrease = () => addVaules(currentValue-1);
    const increase = () => addVaules(currentValue+1);

    const undo = () => {
        if(position > 0){
            setPosition(position-1);
        }
    }
    const redo = () => {
        if(position < history.length - 1){
            setPosition(position+1);
        }
    }
  return (
    <>
        <h1>Counter with Undo and Redo</h1>
        <p>{currentValue}</p>
        <div>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
        <div>
            <button disabled={position === 0} onClick={undo}>undo</button>
            <span>{position+1}/{history.length}</span>
            <button disabled={position === history.length - 1} onClick={redo}>redo</button>
        </div>
        
    </>
  )
}

export default Counter;