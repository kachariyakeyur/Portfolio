import React from 'react';
import '../Projects.css'

function Projects() {
  return (
    <>
        <div className='projects' id='Projects'>
            <div className="pheading"> <h1>Projects</h1></div>
            <div className="pcard-partition">
              <div className="pcard">
                <div className="pimg"><img src="7867852.png" alt="Portfolio" /></div>
                <div className="content">
                  <h2>Portfolio</h2> 
                  <p>Every information about me Skills , projects , ...</p>
                  <a href="https://kachariyakeyur.github.io/TextAnalyzer_and_Editor/"><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="1843444819288bcb6652e7383c87a6b4_icon.png" alt="Text Analyzer" /></div>
                <div className="content">
                  <h2>Text Analyzer</h2> 
                  <p>Modify, Edit and Copy your text here...</p>
                  <a href="https://kachariyakeyur.github.io/TextAnalyzer_and_Editor/"><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="newsletter-business-information-png.png" alt="News app" /></div>
                <div className="content">
                  <h2>Latest News app</h2> 
                  <p>Find latest news and Explore more about that News...</p>
                  <a href="https://keyurs-newsapp.vercel.app/"><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="images.png" alt="iNotebook" /></div>
                <div className="content">
                  <h2>iNotebook</h2> 
                  <p>Add your Notes here and View, Update, Delete Secuirly...</p>
                  <a href="https://keyurs-newsapp.vercel.app/"><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Projects
