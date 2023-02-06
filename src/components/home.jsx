import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div className='home-header-div'>
      <h3 className='home-heading'>Your Next Software Developer</h3>
    </div>
    <div className='home-div'>
        <div className='home-nav-grid'>
          <div className='home-nav-grid-item' id='home-about' onClick={() => {navigate('/about')}}><span className='home-span'>About</span></div>
          <div className='home-nav-grid-item' id='home-skills' onClick={() => {navigate('/skills')}}><span className='home-span'>Skills</span></div>
          <div className='home-nav-grid-item' id='home-projects' onClick={() => {navigate('/projects')}}><span className='home-span'>Projects</span></div>
          <div className='home-nav-grid-item' id='home-contact' onClick={() => {navigate('/contact')}}><span className='home-span'>Contact</span></div>
        </div>
    </div>
    </>
  )
}

export default Home