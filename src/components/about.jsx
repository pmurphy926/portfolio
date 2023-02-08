import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='about-div'>
        <h3>About Me</h3>
        <div className='bio'>
          <div className='bi-img-div'>
            <img onClick={() => {navigate('/contact')}} className='bio-img' src="/profile.png" alt="Patrick Murphy" />
          </div>
          <div className='bio-text-div'>
            <p>I am a full stack developer with a background in education and logistics. Through my years managing a shipping department and a classroom, I have developed invaluable skills in problem solving, collaboration, and making deadlines. I've worked with people of all different types in order to get things done well and on time - truck drivers, port managers, students, parents, teachers, and administrators. Working together toward a common goal is how great things happen, and I am looking forward to being part of a new team.
            <br /><br />
            I'm a voracious reader, music listener, and movie watcher. I've spent a significant amount collecting and organizing my physical and digital collections, which is where my interest in software and data began. During the summer months, you'll find me following the Mets and other baseball minutiae with an obsessiveness that has been developing since first grade.
            <br /><br />
            I'm very excited about learning and growing as a software developer, be it frontend, backend, or full stack. Please don't hesitate to reach out!</p>
          </div>
        </div>
    </div>
  )
}

export default About