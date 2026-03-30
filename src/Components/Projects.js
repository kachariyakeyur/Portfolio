import React from 'react';
import '../Projects.css'

function Projects() {
  return (
    <>
        <div className='projects' id='Projects'>
            <div className="pheading"> <h1>Projects</h1></div>
            <div className="pcard-partition">
              <div className="pcard">
                <div className="pimg"><img src="WhatsApp Image 2026-02-21 at 11.58.20 AM.png" alt="" /></div>
                <div className="content">
                  <h2>Heading</h2> 
                  <p>description about card project</p>
                  <a href=""><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="WhatsApp Image 2026-02-21 at 11.58.20 AM.png" alt="" /></div>
                <div className="content">
                  <h2>Heading</h2> 
                  <p>description about card project</p>
                  <a href=""><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="WhatsApp Image 2026-02-21 at 11.58.20 AM.png" alt="" /></div>
                <div className="content">
                  <h2>Heading</h2> 
                  <p>description about card project</p>
                  <a href=""><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="WhatsApp Image 2026-02-21 at 11.58.20 AM.png" alt="" /></div>
                <div className="content">
                  <h2>Heading</h2> 
                  <p>description about card project</p>
                  <a href=""><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Projects
