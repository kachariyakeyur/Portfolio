import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub,faXTwitter } from '@fortawesome/free-brands-svg-icons'
      
function NavBar() {
  return (
    <div className="navbar">
        <div className="left">
            <strong>Keyur's Portfolio</strong>
        </div>
        <div className="middle">
            
            <ul className="menu">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
        <div className="right">
            <ul className="img">
                <li><a href="https://www.linkedin.com/in/keyur-kachariya-44a807324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/kachariyakeyur" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://x.com/KeyurKachariya7" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
