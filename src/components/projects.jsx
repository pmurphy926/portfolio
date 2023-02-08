import React, {useState, useEffect} from 'react'
import AnimatedPage from './animatedpage';

const Projects = () => {
    
    
    
    return (
        <AnimatedPage>
        <div className='projects-div'>
            <h3 className='component-heading'>Projects</h3>
            <hr />
            <p>Below are some of the projects I have worked on both independently and in groups.</p>
            <div className='project-images-grid'>
                
                <div>
                    <div>
                        <a href="https://steady-mooncake-d1c73f.netlify.app/"><img className='project-img' src="https://i.imgur.com/Ld292K2.png" alt="Wardrobe app homepage" /></a>
                    </div>
                    <div className="project-description">
                        <p className='description'>A wardrobe manager app built with React, Node.js, MongoDB and React. My collaborator handled the <a href='https://github.com/samhan104/project3backend' target="_blank">backend</a>.</p>
                        <div className='project-btn-div'>
                            <a href="https://steady-mooncake-d1c73f.netlify.app/" target="_blank"><button className='project-btn'>Site</button></a>
                            <a href="https://github.com/pmurphy926/project_3" target="_blank"><button className='project-btn'>Code</button></a>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div>
                    <img className='project-img' src="https://i.imgur.com/chiwWw9.png" alt="Baseball GM app roster page" />
                    </div>
                    <div className="project-description">
                        <p className='description'>A baseball roster management app - build the perfect team by releasing and signing players. Built with Express, MongoDB, and Node.js</p>
                        <div className='project-btn-div'>
                            <a href="https://tranquil-plateau-25876.herokuapp.com/" target="_blank"><button className='project-btn'>Site</button></a>
                            <a href="https://github.com/pmurphy926/project_2_GM" target="_blank"><button className='project-btn'>Code</button></a>
                        </div>
                    </div>
                </div>
            
                <div>
                    <div>
                        <img className='project-img' src="https://i.imgur.com/KE5MOHx.jpg" alt="More projects coming soon" />
                    </div>
                    <div className="project-description">
                        <p className='description'>Check back for projects that I complete in the future!</p>
                    </div>
                </div>

            </div>
        </div>
        </AnimatedPage>
  )
}

export default Projects