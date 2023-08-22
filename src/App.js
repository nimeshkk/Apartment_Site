import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Describe from './components/describe/describe'
import Info from './components/info/info'
import Footer from './components/footer/footer'


export default function App() {
  return (
    <div>

      <Navbar />
      <Home />
      <Describe/>  
      <Info/>
      <Footer/>      
      
    </div>
  )
}

