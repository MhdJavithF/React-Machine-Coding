import { Button } from 'bootstrap';
import React, { useRef } from 'react'

const InputForm = () => {
    const valRef = useRef("");
  return (
    <>
        <form onSubmit={e => {e.preventDefault(); console.log(valRef.current.value)}}>
            <input className='p-2 ' type="text" placeholder="abc@gmail.com" ref={valRef} />
            <button className='btn bg-primary text-white'>Click</button>
        </form>
    </>
  )
}

export default InputForm