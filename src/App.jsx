import './App.css'
import { Routes, Route, useParams, Outlet } from "react-router-dom"
import { useState } from 'react'
import User from './pages/User'
import Blogs from './pages/Blogs'



function App() {
  const [isLogin, setIsLogin] = useState(true)
  if (isLogin) {
    return (
      <Routes>
        <Route path='/' element={<h1>Dashboard</h1>} />
        <Route path='/users' element={<User />} />
        <Route path='/blog' element={<Blogs />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<h1>Login Page</h1>} />
      <Route path='/about' element={<h1>About Page</h1>} />
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
