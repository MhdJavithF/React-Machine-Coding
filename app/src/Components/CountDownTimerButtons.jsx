import React, { useEffect, useRef, useState } from 'react'

const CountDownTimer = () => {
    const [time, setTime] = useState(10);
    const [isRunning, setRunning] = useState(false);
    const timeRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            timeRef.current = setInterval(()=>{
                setTime(prev => {
                    if(prev <= 1){
                        clearInterval(timeRef.current);
                        setRunning(false);
                        return 0;
                    }
                    return prev - 1;
                })
            }, 1000)
        }
        
        return () => {
            clearInterval(timeRef.current);
        }
    }, [isRunning]);

    const handleStart = () => {
        setRunning(true);
    }
    const handlePause = () => {
        clearInterval(timeRef.current);
        setRunning(false);
    }
    const handleReset = () => {
        clearInterval(timeRef.current);
        setRunning(false);
        setTime(10);
    }
    return (
        <div className='animated-bg'>
            <h1>Count Down Timer</h1>
            <h1>{time}</h1>
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CountDownTimer