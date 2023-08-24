import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navbarStyle,setNavbarStyle]= useState({});
  const[open,setOpen]= useState(false);
  const [scroll,setScroll]= useState(false);

  const toggleMenu = () =>{
    setOpen(!open);
  }
  
  return (
    <>
        <nav style={navbarStyle} className={`navbar ${open ? 'nav-open' : ''} ${scroll ? 'scrolled' : ''}`}>
            <div className="tophead">
                <h1>
                    <Link className="name-logo" spy smooth offset={50} duration={500} to='home'>snehasish.</Link>
                    <span className="blink" />
                </h1>
                <div className={`menu-btn ${open ? 'opened-btn' : ''}`} onClick={toggleMenu}></div>
            </div>
            <ul className={`menu ${open ? 'open' : ''}`}>
            <li>
            <Link spy smooth offset={50} duration={500} onClick={toggleMenu} to="home">
              home,
            </Link>
          </li>
          <li>
            <Link spy smooth offset={50} duration={500} onClick={toggleMenu} to="about">
              about,
            </Link>
          </li>
          <li>
            <Link spy smooth offset={50} duration={500} onClick={toggleMenu} to="projects">
              projects,
            </Link>
          </li>
          <li>
            <li>
              <Link spy smooth offset={50} duration={500} onClick={toggleMenu} to="contact">
                contact
              </Link>
            </li>
          </li>
            </ul>
        </nav>
        <div className={`scroll-to-top ${scroll ? 'scroll-true' : ''}`}>
          <Link spy smooth offset={50} duration={1000} to='home'>
          <i className="fa-solid fa-arrow-up" />
          </Link>
        </div>
    </>
  )
}

export default Navbar