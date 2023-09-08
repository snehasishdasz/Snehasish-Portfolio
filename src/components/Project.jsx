import React from 'react'
import github from '../assets/github.png'
import ProjectCSS from "./Project.css"
import { projects } from '../Constants/constants'


const Project = () => {
    return (
        <div className="projects" id="projects">
            <h1 className="title projects-title">featuRed pRojecTs</h1>
            <p className="projects-para">
                A showcase of my diverse portfolio, highlighting the various web and software development projects I have worked on. From responsive web applications to innovative software solutions, each project represents my dedication to delivering high-quality work with a focus on user experience, functionality, and modern design.
            </p>
            <div className="projects-container">
                {projects.map((element, index) => {
                    {/* const git_link = element.github; */}
                    return (
                        <div key={index}>
                            <div className="project-card">
                                {/* <div className="project-card"> */}
                                <img src={require(element.imgsrc)} alt="codeimg" />
                                
                                
                                {/* <div className='hover-div'> 
                            <div onClick={()=> window.open(git_link, "_blank")}>
                              <img src={github} alt='github' className='github-img' />
                            </div>  
                    </div> */}
                                <div className="card-description">
                                    <h3>{element.name}</h3>
                                    <p>{element.descr}</p>
                                    <div className="stacks">
                                        <button className='tech-stack'>{element.tech1}</button>
                                        <button className='tech-stack'>{element.tech2}</button>
                                        <button className='tech-stack'>{element.tech3}</button>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Project