import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {  FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i aM SNEHAISH</h2>
        <h3 className="tagline">Breaking keyboards and pushing pixels since 2020</h3>
        <p className="paragraph">I'm a passionate frontend developer who thrives on transforming innovative ideas into captivating on-screen realities. My keyboard is my greatest tool, enabling me to bring imagination to life through elegant code and dynamic designs. With a constant drive to create and implement, I find my true calling in crafting immersive digital experiences.</p>
        <div className="hero-btns">
        <button className="hire-me">
          <a href="">GET MY CV</a>
        </button>
        <button className="lets-talk">
          <Link spy smooth offset={50} duration={500} to="contact">
            LET'S TALK
          </Link>
        </button>
        </div>
      </div>
      <img src={Imu} alt="snehasish" className='hero-image' />
    </div>
    <div className="social-icons">
        <a href="https://github.com/snehasishdasz" target="_blank" rel="noreferrer">
        <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/snehasish-das/" target="_blank" rel="noreferrer">
        <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/snehasishdasz/" target="_blank" rel="noreferrer">
        <FaSquareInstagram />
        </a>
        <a href="https://twitter.com/Snehasishdasz" target="_blank" rel="noreferrer">
        <FaTwitter />
        </a>
      </div>
  </div>
);

export default Hero;
