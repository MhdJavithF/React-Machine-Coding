import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Dropdown from './Components/Dropdown'
import RefDemo from './Components/RefDemo'
import ArrayFlatten from './Components/ArrayFlatten'
import ObjectFlatten from './Components/ObjectFlatten'
import CountDownTimer from './Components/CountDownTimerButtons'
import CountDown from './Components/CountDown'
import KanbanByClick from './Components/KanbanByClick'
import Pokiemon from './PS-practice/Pokiemon'
import InputForm from './PS-practice/InputForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      {/* <RefDemo /> */}
      {/* <ArrayFlatten /> */}
      {/* <ObjectFlatten /> */}
      {/* <CountDownTimer /> */}
      {/* <CountDown /> */}
      {/* <KanbanByClick /> */}
      {/* <Pokiemon /> */}
      <InputForm />
    </>
  )
}

export default App
