import React, {useState, useEffect} from 'react'
import AnimatedPage from './animatedpage';

const Skills = () => {
  return (
    <AnimatedPage>
    <div className='skills-div'>
        <h3 className='component-heading'>Skills</h3>
        <hr />
        <p>During my time in General Assembly's immersive software development course, I worked with the following tools and languages:</p>
        <div className='skills-grid'>
            <div><img className='skills-img' src="/html.png" alt="" /></div>
            <div><img className='skills-img' src="/css.png" alt="" /></div>
            <div><img className='skills-img' src="/js.png" alt="" /></div>
            <div><img className='skills-img' src="/node2.png" alt="" /></div>
            <div><img className='skills-img' src="/mongodb.png" alt="" /></div>
            <div><img className='skills-img' src="/rect.png" alt="" /></div>
            <div><img className='skills-img' src="/python.png" alt="" /></div>
            <div><img className='skills-img' src="/django.png" alt="" /></div>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default Skills