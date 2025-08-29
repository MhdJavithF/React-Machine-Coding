import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [time, setTime] = useState(10);

    useEffect(() => {
        let timer;
        timer = setInterval(()=>{
            setTime(prev => {
                if(prev <= 0){
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className='animated-bg'>
            <h1>Count Down Timer</h1>
            <h1>{time}</h1>
        </div>
    )
}

export default CountDown