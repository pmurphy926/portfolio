import React, {useState} from 'react'
import './App.css'
import Nav from './components/nav'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Home from './components/home'
import Contact from './components/contact'

const App = () => {
  
  const [homeDisplay, setHomeDisplay] = useState(true)
  const [aboutDisplay, setAboutDisplay] = useState(false)
  const [skillsDisplay, setSkillsDisplay] = useState(false)
  const [projectsDisplay, setProjectsDisplay] = useState(false)
  const [contactDisplay, setContactDisplay] = useState(false)

  return (
    <>
      <Nav homeDisplay={homeDisplay} setHomeDisplay={setHomeDisplay} aboutDisplay={aboutDisplay} setAboutDisplay={setAboutDisplay} skillsDisplay={skillsDisplay} setSkillsDisplay={setSkillsDisplay} projectsDisplay={projectsDisplay} setProjectsDisplay={setProjectsDisplay}  contactDisplay={contactDisplay} setContactDisplay={setContactDisplay}/>
      <div className='container'>
        {homeDisplay ? <Home /> : null}
        {aboutDisplay ? <About /> : null}
        {skillsDisplay ? <Skills /> : null}
        {projectsDisplay ? <Projects /> : null}
        {contactDisplay ? <Contact /> : null}
      </div>
    </>
  )
}

export default App
