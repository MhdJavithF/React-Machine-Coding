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
import InputForm from './PS-practice/inputForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar'
import ChessBoard from './Components/ChessBoard'
import Todo from './Components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Todo/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/toggle" element={<RefDemo />} />
        <Route path="/arrflatten" element={<ArrayFlatten />} />
        <Route path="/objflatten" element={<ObjectFlatten />} />
        <Route path="/countdowntimer" element={<CountDownTimer />} />
        <Route path="/countdown" element={<CountDown />} />
        <Route path="/kanban" element={<KanbanByClick />} />
        <Route path="/pokiemon" element={<Pokiemon />} />
        <Route path="/inputform" element={<InputForm />} />
        <Route path="/chessboard" element={<ChessBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
