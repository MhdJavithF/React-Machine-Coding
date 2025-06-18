import React, { useRef } from 'react'

const InputForm = () => {
    const valRef = useRef("");
  return (
    <>
        <form onSubmit={e => {e.preventDefault(); console.log(valRef.current.value)}}>
            <input type='text' placeholder='abc@gmail.com' ref={valRef} />
            <button type='submit'>click</button>
        </form>
    </>
  )
}

export default InputForm