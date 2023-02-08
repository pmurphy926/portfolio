import React, {useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/nav'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Home from './components/home'
import Contact from './components/contact'
import IconBar from './components/iconbar'
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const location = useLocation();

  return (
    <>
    <Nav />
    <IconBar />
    <div className='container'>
      {/* <AnimatePresence> */}
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      {/* </AnimatePresence> */}
    </div>
    </>
  )
}

export default App
