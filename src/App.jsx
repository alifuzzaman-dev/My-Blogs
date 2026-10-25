import { useState } from 'react'
import './App.css'
import Navbar2 from './component/Navbar/Navbar2'
import Blogs from './component/Blogs/Blogs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar2></Navbar2>
     

     <div className="main-container flex text-center">
       <div className="left-container w-[70%]">
        <Blogs></Blogs>
       </div>
       <div className="right-container w-[30%]">
        <h1>Reading time : 0 </h1>
        <h1>Bookmark Count : 0 </h1>
       </div>

     </div>
    </>
  )
}

export default App
