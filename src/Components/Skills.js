import React from 'react'
import '../Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeetcode } from '@fortawesome/free-brands-svg-icons'

function Skills() {
  return (
    <div className='skills' id='Skills'>
      <div className="sheading"> <h1>Skills</h1></div>
      <div className="skills-partition">
        <div className="card"> <h2>Programming Languages</h2>       
          <div className="scontent"> 
            <div className="tabs"> AAAAAAAAAAA </div>
            <div className="tabs"> BBBBBB </div> 
            <div className="tabs"> AAAAAAAA </div>
          </div> 
        </div>
        <div className="card"><h2>Frontend</h2> <div className="scontent"> <div className="tabs"> A </div> </div> </div>
        <div className="card"><h2>Backend</h2> <div className="scontent"> <div className="tabs"> A </div> </div> </div>
        <div className="card"><h2>Database</h2> <div className="scontent"> <div className="tabs"> A </div> </div> </div>
        <div className="card"><h2>Python</h2> <div className="scontent"> <div className="tabs"> A </div> </div> </div>
      </div>
      <div className="sheading"> <h2>Other Skills</h2></div>
      <div className='sicons'>
      <a href="https://github.com/kachariyakeyur" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLeetcode} /></a>
      </div>
    </div>
    

  )
}

export default Skills
