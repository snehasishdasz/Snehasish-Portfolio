import React from 'react';
import ProjectCSS from './Project.css';
import { projects } from '../Constants/constants';
import { BsArrowUpRightCircle, BsGithub } from 'react-icons/bs';
// import { NavLink } from 'react-router-dom';


const Project = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
        A showcase of my diverse portfolio, highlighting the various web and software development projects I have worked on. From responsive web applications to innovative software solutions, each project represents my dedication to delivering high-quality work with a focus on user experience, functionality, and modern design.
      </p>
      <div className="projects-container">
        {projects.map((element, index) => {
          const git_link = element.github;
          return (
            <div key={index} className="project-card">
              {git_link !== 'N/A' && (
                <a href={element.github} target="_blank" rel="noreferrer" className="github-link">
                  <BsGithub className="github-icon"/>
                </a>
              )}
              <a href={element.github}>
              <img src={element.imgsrc} alt="codeimg" />

              </a>
              <div className="card-description">
                <h3>{element.name}</h3>
                <p>{element.descr}</p>
                <div className="stacks">
                  <button className='tech-stack'>{element.tech1}</button>
                  <button className='tech-stack'>{element.tech2}</button>
                  <button className='tech-stack'>{element.tech3}</button>
                </div>
              </div>
            </div>
          );
        })}
        
        <button className="more-projects-button">More Projects</button>

        
      </div>
    </div>
  );
}

export default Project;
