import { Route, Router, Routes } from 'react-router-dom'
import './styles/reset.css'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Login from './pages/Login'
function App() {

  
  return (
    <main className="main-color">
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/register' element={<Register />} />
      </Routes>

    
    </main>
  )
}

export default App
