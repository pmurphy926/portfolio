import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = (props) => {
    const navigate = useNavigate();

    return (
        <>
        <h3 className='header-h3'>Patrick Murphy</h3>
        <div className='nav-div'>
            <nav>
                <ul className='nav-ul'>
                    <li> <button className='nav-btn' onClick={() => {navigate('/')}}>Home</button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/about')}}>About</button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/skills')}}>Skills</button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/projects')}}>Projects</button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/contact')}}>Contact</button> </li>
                </ul>
            </nav>
        </div>
        </>
  )
}

export default Nav