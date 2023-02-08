import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from './animatedpage';

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <AnimatedPage>
    <div className='home-header-div'>
      <h3 className='home-heading'>Your Next Software Developer</h3>
    </div>
    <div className='home-div'>
        <div className='home-nav-grid'>
          <div className='home-nav-grid-item' id='home-about' onClick={() => {navigate('/about')}}><span className='home-span'>about</span></div>
          <div className='home-nav-grid-item' id='home-skills' onClick={() => {navigate('/skills')}}><span className='home-span'>skills</span></div>
          <div className='home-nav-grid-item' id='home-projects' onClick={() => {navigate('/projects')}}><span className='home-span'>projects</span></div>
          <div className='home-nav-grid-item' id='home-contact' onClick={() => {navigate('/contact')}}><span className='home-span'>contact</span></div>
        </div>
    </div>
    </AnimatedPage>
    </>
  )
}

export default Home