import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = (props) => {
    const navigate = useNavigate();

    function toggleDropdown () {
        const hamburger = document.getElementById("hamburger");
        const dropdownContent = document.getElementById("myDropdown");
        hamburger.classList.toggle("change");
        dropdownContent.classList.toggle("show");
    }

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
        <div id='mobile-nav-div'>
            <div class="dropdown">
                <div id="hamburger" class="dropBtn" onClick={toggleDropdown}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <div id="myDropdown" class="dropdown-content">
                    <li> <button className='drop-nav-btn' onClick={() => {navigate('/')}}><span className='li'>Home</span></button> </li>
                    <li> <button className='drop-nav-btn' onClick={() => {navigate('/about')}}><span className='li'>About</span></button> </li>
                    <li> <button className='drop-nav-btn' onClick={() => {navigate('/skills')}}><span className='li'>Skills</span></button> </li>
                    <li> <button className='drop-nav-btn' onClick={() => {navigate('/projects')}}><span className='li'>Projects</span></button> </li>
                    <li> <button className='drop-nav-btn' onClick={() => {navigate('/contact')}}><span className='li'> Contact</span></button> </li>
                </div>
            </div>
        </div>
        </>
  )
}

export default Nav