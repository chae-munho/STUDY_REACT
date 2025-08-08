import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function showModalHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
        setModalIsVisible(false);
    }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler }></PostList>
      </main> 
    </>
 
  )
}

export default App
