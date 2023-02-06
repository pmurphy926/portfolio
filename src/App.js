import React, {useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Home from './components/home'
import Contact from './components/contact'

const App = () => {

  return (
    <>
    {/* <Nav /> */}
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App
