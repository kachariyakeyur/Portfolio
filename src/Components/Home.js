import React from 'react'



function Home() {
  return (
    <div className="home" id="Home">
      <div className="hcontainer">
        <div className="lhome">
          <h1>Hi, I'm Keyur Kachariya</h1>
        <h3>Frontend Developer</h3>
        <p>
          I build responsive and modern websites using React and JavaScript.etc...
        </p>
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
