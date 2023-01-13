import React, {useState, useEffect} from 'react'

const Nav = (props) => {

    const showHome = () => {
        props.setHomeDisplay(true)
        props.setAboutDisplay(false)
        props.setSkillsDisplay(false)
        props.setProjectsDisplay(false)
        props.setContactDisplay(false)
    }

    const showAbout = () => {
        props.setHomeDisplay(false)
        props.setAboutDisplay(true)
        props.setSkillsDisplay(false)
        props.setProjectsDisplay(false)
        props.setContactDisplay(false)

    }

    const showSkills = () => {
        props.setHomeDisplay(false)
        props.setAboutDisplay(false)
        props.setSkillsDisplay(true)
        props.setProjectsDisplay(false)
        props.setContactDisplay(false)
    }

    const showProjects = () => {
        props.setHomeDisplay(false)
        props.setAboutDisplay(false)
        props.setSkillsDisplay(false)
        props.setProjectsDisplay(true)
        props.setContactDisplay(false)
    }

    const showContact= () => {
        props.setHomeDisplay(false)
        props.setAboutDisplay(false)
        props.setSkillsDisplay(false)
        props.setProjectsDisplay(false)
        props.setContactDisplay(true)
    }

    return (
        <div className='nav-div'>
            {props.setHomeDisplay ? null : <h3 className='header-h3'>Patrick Murphy</h3>}
            <nav>
                <ul className='nav-ul'>
                    <li> <button className='nav-btn' onClick={showHome}>Home</button> </li>
                    <li> <button className='nav-btn' onClick={showAbout}>About</button> </li>
                    <li> <button className='nav-btn' onClick={showSkills}>Skills</button> </li>
                    <li> <button className='nav-btn' onClick={showProjects}>Projects</button> </li>
                    <li> <button className='nav-btn' onClick={showContact}>Contact</button> </li>
                </ul>
            </nav>
        </div>
  )
}

export default Nav