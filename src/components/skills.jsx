import React, {useState, useEffect} from 'react'

const Skills = () => {
  return (
    <div className='skills-div'>
        <h3>Skills</h3>
        <p>During my time as a software development fellow, I worked with the following tools and languages:</p>
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
  )
}

export default Skills