import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE ❤
        {' '}
        <br />
        TEA ☕️
        <br />
        {' '}
        CHAT 💬
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Photography</p>
        <p>Tea</p>
        <p>Pizza</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span><a href="mailto:snehasishdas872@gmail.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/snehasishdasz" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/snehasish-das/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
        <span>
          {' '}
          <a href="https://www.instagram.com/snehasishdasz/" target="_blank" rel="noreferrer">INSTAGRAM</a>
        </span>
        <span><a href="https://twitter.com/Snehasishdasz" target="_blank" rel="noreferrer">TWITTER</a></span>
      </div>
    </div>
    <footer className="footer">
        Created with ❤️ by Snehasish
      </footer>
  </div>
);

export default Contact;
