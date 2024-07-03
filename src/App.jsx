import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Problems from './pages/Problems'
import Contests from './pages/Contests'
// import Algorithms from './pages/Algorithms'
// import Rooms from './pages/Rooms'
import Home from './pages/Home'
import Editor from './pages/Editor'
import ChatApp from './components/ChatApp'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/problems' element={<Problems />}></Route>
        <Route path='/contests' element={<Contests />}></Route>
        {/* <Route path='/algorithms' element={<Algorithms />}></Route> */}
        <Route path='/editor' element={<Editor />}></Route>
        <Route path='/chat-app' element={<ChatApp />} />
      </Routes>

    </div>
  )
}

export default App
