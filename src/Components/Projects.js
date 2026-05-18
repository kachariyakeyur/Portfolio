import React from 'react';
import '../Projects.css'

function Projects() {
  return (
    <>
        <div className='projects' id='Projects'>
            <div className="pheading"> <h1>Projects</h1></div>
            <div className="pcard-partition">
              
              <div className="pcard">
                <div className="pimg"><img src="text.jpg" alt="Text Analyzer" /></div>
                <div className="content">
                  <h2>Text Analyzer</h2> 
                  <p>Modify, Edit and Copy your text here...</p>
                  <a href="https://kachariyakeyur.github.io/TextAnalyzer_and_Editor/"  target='_blank' rel="noopener noreferrer"><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="news.jpg" alt="News app" /></div>
                <div className="content">
                  <h2>Latest News app</h2> 
                  <p>Find latest news and Explore more about that News...</p>
                  <a href="https://keyurs-newsapp.vercel.app/" target='_blank' rel="noopener noreferrer" ><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>
              <div className="pcard">
                <div className="pimg"><img src="notebook.jpg" alt="iNotebook" /></div>
                <div className="content">
                  <h2>iNotebook</h2> 
                  <p>Add your Notes here and View, Update, Delete Secuirly...</p>
                  <a href="https://i-notebook-live.vercel.app/login" target='_blank' rel="noopener noreferrer" ><button className="pview"><h2>View</h2></button></a>
                </div>
              </div>

             </div>
        </div>
    </>
  )
}

export default Projects
