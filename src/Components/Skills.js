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
            <div className="tabs"> C </div>
            <div className="tabs"> C++ </div> 
            <div className="tabs"> Python </div>
            <div className="tabs"> Shell Script </div>
          </div> 
        </div>
        <div className="card"> <h2>Frontend</h2>       
          <div className="scontent"> 
            <div className="tabs"> HTML</div>
            <div className="tabs"> CSS </div> 
            <div className="tabs"> JavaScript </div>
            <div className="tabs"> Bootstrap </div>
            <div className="tabs"> React Js </div>
          </div> 
        </div>
        <div className="card"> <h2>Backend</h2>       
          <div className="scontent"> 
            <div className="tabs"> Node Js</div>
            <div className="tabs"> Express Js </div> 
            <div className="tabs"> API key </div>
            <div className="tabs"> Postman </div>
            
          </div> 
        </div>
        <div className="card"> <h2>DataBase</h2>       
          <div className="scontent"> 
            <div className="tabs"> My SQL</div>
            <div className="tabs"> MongoDB </div> 
            
          </div> 
        </div>
        <div className="card"> <h2>Algorithms</h2>       
          <div className="scontent"> 
            <div className="tabs"> Data Structure and Algorithm</div>
            
          </div> 
        </div>
        <div className="card"> <h2>Python</h2>       
          <div className="scontent"> 
            <div className="tabs"> NumPy</div>
            <div className="tabs"> Pandas</div>
            
          </div> 
        </div>
      </div>
      <div className="sheading"> <h2>Other Skills</h2></div>
      <div className='sicons'>
      <a href="https://github.com/kachariyakeyur" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLeetcode} /></a>
      </div>
    </div>
    

  )
}

export default Skills
