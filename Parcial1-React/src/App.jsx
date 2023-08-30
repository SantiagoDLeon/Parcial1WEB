import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CantidadLlamada from './Components/CantidadLlamada'
import Converter from './Components/Converter'
import Saludo from './Components/Saludo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Converter/>
      <CantidadLlamada/>
      <Saludo/>
    </>
  )
}

export default App
