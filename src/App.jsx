import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Profile from './Profile'
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
     
     <Routes>
      <Route path='/' element={ <Profile />}/>
      <Route path='/login' element={<Login/>}/>
     
      </Routes>
    </>
  )
}

export default App
