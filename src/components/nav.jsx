import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = (props) => {
    const navigate = useNavigate();

    return (
        <div className='nav-div'>
            {props.setHomeDisplay ? null : <h3 className='header-h3'>Patrick Murphy</h3>}
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
  )
}

export default Nav