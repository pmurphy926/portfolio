import React from 'react'

const IconBar = () => {
    return (
        <>
        <div class="icon-bar">
            <a href="https://www.linkedin.com/in/patrickmurphy90/" class="linkedin" target="_blank">
                <img className='icon-bar-icon' src="/linkedin.png" alt="LinkedIn logo" />
            </a>
            <a href="https://drive.google.com/file/d/14EkRgTilITQSJOh5YEccHva7uv5JA5XM/view?usp=share_link" class="resume" target='_blank'>
                <img className='icon-bar-icon' src="/resume.png" alt="Document icon" />
            </a>
            <a href="https://github.com/pmurphy926" class="github" target="_blank">
                <img className='icon-bar-icon' src="/github3.png" alt="Github logo" />
            </a>
        </div>
        </>
  )
}

export default IconBar