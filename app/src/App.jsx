import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Dropdown from './Components/Dropdown'
import RefDemo from './Components/RefDemo'
import ArrayFlatten from './Components/ArrayFlatten'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      {/* <RefDemo /> */}
      <ArrayFlatten />
    </>
  )
}

export default App
