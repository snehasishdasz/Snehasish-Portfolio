import React, { useState } from 'react'
import { allprojects } from '../Constants/constants'
import { BsArrowUpRightCircle, BsGithub } from 'react-icons/bs';
import "./AllProject.css"

const AllProject = () => {
  const [ projitems, setProjitems ] = useState(allprojects);

    const filterItems = (categItem) => {
        if (categItem === '#html') {
          const updatedItems = allprojects.filter((currElem) => {
            return currElem.techs.some((tech) => tech === categItem);
          });
          setProjitems(updatedItems);
        } 
        else if(categItem === '#reactjs')
        {
            const updatedItems = allprojects.filter((currElem) => {
                return currElem.techs.some((tech) => tech === categItem);
              });
              setProjitems(updatedItems);
        }
        else if(categItem === '#nextjs')
        {
            const updatedItems = allprojects.filter((currElem) => {
                return currElem.techs.some((tech) => tech === categItem);
              });
              setProjitems(updatedItems);
        }
        else 
        {
          setProjitems(allprojects);
        }
      };
  return (
    <div className="projectss" >
      <h1 className="title projectss-title">mY pRojecTs</h1>
      <div className="filter-projs">
                 <span onClick={()=>{filterItems('#html')}}> HTML </span>
                 <span onClick={()=>{filterItems('#reactjs')}}> ReactJS </span>
                 <span onClick={()=>{filterItems('#nextjs')}}> NextJS </span>
                 <span onClick={()=>{filterItems('#all')}}> All </span>
     </div>
      <div className="projects-container">
        {projitems.map((element, index) => {
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
      </div>
    </div>
  )
}

export default AllProject
    // <div className='all-projects'>
    //     <div className='all-proj-sec'>


    //         <div className="headings">
    //             <h2 className='titlle'> MY PROJECTS </h2>
    //             <div className="underline"> </div>
    //         </div>

    //         <div className="filter-projs">
    //             <span onClick={()=>{filterItems('#html')}}> HTML </span>
    //             <span onClick={()=>{filterItems('#reactjs')}}> ReactJS </span>
    //             <span onClick={()=>{filterItems('#nextjs')}}> NextJS </span>
    //             <span onClick={()=>{filterItems('#all')}}> All </span>
    //         </div>

    //         <div className="projects-container">
    //     {projitems.map((element, index) => {
    //       const git_link = element.github;
    //       return (
    //         <div key={index} className="project-card">
    //           {git_link !== 'N/A' && (
    //             <a href={element.github} target="_blank" rel="noreferrer" className="github-link">
    //               <BsGithub className="github-icon"/>
    //             </a>
    //           )}
    //           <a href={element.github}>
    //           <img src={element.imgsrc} alt="codeimg" />

    //           </a>
    //           <div className="card-description">
    //             <h3>{element.name}</h3>
    //             <p>{element.descr}</p>
    //             <div className="stacks">
    //               <button className='tech-stack'>{element.tech1}</button>
    //               <button className='tech-stack'>{element.tech2}</button>
    //               <button className='tech-stack'>{element.tech3}</button>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
        


        
    //   </div>
    //     </div>
    // </div>