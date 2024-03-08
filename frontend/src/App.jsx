import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { useAuthStore } from './store/authStore'
import { Toaster } from 'react-hot-toast'
import CollabDraw from './pages/home/CollabDraw'
import ChatDashboard from './pages/home/ChatDashboard'
import CodeShare from './pages/home/CodeShare'
import addNotification from 'react-push-notification'
import TodoList from './pages/home/TodoList'

function App() {
  const authUser = useAuthStore((state) => state.authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />}>
          <Route path='/' element={<ChatDashboard />} />
          <Route path='/colab_dashboard' element={<CollabDraw />} />
          <Route path='/code_share' element={<CodeShare />} />
          <Route path='/todo_list' element={<TodoList />} />
        </Route>

        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
