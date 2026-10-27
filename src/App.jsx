import { useState } from 'react'
import './App.css'
import Navbar2 from './component/Navbar/Navbar2'
import Blogs from './component/Blogs/Blogs'
function App() {
  //const [count, setCount] = useState(0)
  const  [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) =>{
    setBookmarked( [...bookmarked, blog])
  }

  const handleMarkAsRead = (time, id) =>{
    const newTime = readingCount + time;
    setReadingCount(newTime);
    handleRemoveFromBookmark(id);
  }

  const handleRemoveFromBookmark = (id) =>{
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookMark);
  }

  console.log(readingCount);
  return (
    <>
     <Navbar2></Navbar2>
     

     <div className="main-container flex text-center">
       <div className="left-container w-[70%]">
        <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
       </div>
       <div className="right-container w-[30%]">
        <h1>Reading time : {readingCount} </h1>
        <h1>Bookmark Count : {bookmarked.length} </h1>
        {
          bookmarked.map((marked) => <p 
          key={marked.id}
          className='bg-red-600 p-2 shadow m-2 text-white '>{marked.title}</p>)
        }
       </div>

     </div>
    </>
  )
}

export default App
