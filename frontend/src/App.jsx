import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { useAuthStore } from './store/authStore'
import { Toaster } from 'react-hot-toast'

function App() {
  const authUser = useAuthStore((state) => state.authUser);

  return (
    <>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        <Route path='*' element={<Navigate to='/' /> } />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
