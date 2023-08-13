import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Describe from './components/describe/describe'


export default function App() {
  return (
    <div>

      <Navbar />
      <Home />
      <Describe/>        
      
    </div>
  )
}

