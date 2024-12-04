import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dasboard'
import Projects from './pages/Projects'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
    
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/dashboard" element={<Dashboard  />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/Signin" element={<Signin />}/>
    <Route path="/Signup" element={<Signup />}/>    
    
   </Routes>
   </BrowserRouter>
  )
}
