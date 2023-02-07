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
                    <li> <button className='nav-btn' onClick={() => {navigate('/')}}><span className='li'>Home</span></button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/about')}}><span className='li'>About</span></button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/skills')}}><span className='li'>Skills</span></button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/projects')}}><span className='li'>Projects</span></button> </li>
                    <li> <button className='nav-btn' onClick={() => {navigate('/contact')}}><span className='li'> Contact</span></button> </li>
                </ul>
            </nav>
        </div>
        </>
  )
}

export default Nav