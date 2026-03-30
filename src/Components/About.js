import React from 'react'
import '../About.css'
function About() {
  return (
    <div id="About">
    <h1>About Me</h1>
     <div className="container">
        <div className="Aleft">
          <img src="/about.png" alt="portfolio" />
        </div>

        <div className="Aright">
          <p> Hello, I am <strong>Keyur Kachariya</strong>.</p>
          <p>
            I am a B.Tech Computer Science and Engineering student at
            IIIT (Indian Institute of Information Technology), Surat, Gujarat. 
          </p>
          <p>
            a passionate and dedicated web developer who enjoys creating modern, responsive, and user-friendly websites. I love turning ideas into real digital experiences through clean design and functional code.
          </p> 
          <p>
            I have experience working with HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, and I’m continuously improving my skills in full-stack web development.
          </p>
        </div>
      </div>

      <h1>Resume</h1>
      <div className="resume">
        <iframe className='resumeframe' title='Resume' src="about.png"></iframe>
      </div>

    
  </div>
  )
}

export default About
