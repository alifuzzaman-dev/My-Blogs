import { useState } from 'react'
import './App.css'
import Navbar2 from './component/Navbar/Navbar2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar2></Navbar2>
    </>
  )
}

export default App
