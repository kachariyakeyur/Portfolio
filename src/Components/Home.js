import React from 'react'



function Home() {
  return (
    <div className="home" id="Home">
      <div className="hcontainer">
        <div className="lhome">
          <h1>Hi, I'm Keyur Kachariya</h1>
        <h3>Full Stack Developer</h3>
        <h4>
          Passionate about building responsive, modern, and interactive <br/> web applications that deliver great user experiences.
        </h4>
        <a href='#Contact'>
          <button className="btn" ><strong>Contact Me</strong></button>
        </a>
        </div>
        <div className="rhome">
          <img src='homeimg.png' alt='Me'  />
        </div>
        </div>
    </div>
  )
}

export default Home
