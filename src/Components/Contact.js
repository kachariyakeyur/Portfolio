import React from 'react'
import '../Contact.css'
import { useState } from 'react';


export default function ContactForm() {
  const [result, setResult] = useState("Submit your response !");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e55a2ee1-7545-402d-b9bd-8380d1fe5852");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Thank You" : "Error");
  };

  return (
    <div className='contact' id='Contact'>
      <div className="cheading"> <h1>Contact</h1></div>
      
      <div className="form-container">
      <form className='form' onSubmit={onSubmit}>
          <div className="touch"> <h1>Get in Touch</h1></div>
      
          <input className='input' type="text" name="name" placeholder='Name *' required/>
        
      
          
          <input className='input' type="email" name="email" placeholder='Email *' required/>
        
      
     
          <textarea className='input message' name="message" placeholder='Message' ></textarea>
        
        
          <button className='submit' type="submit">Submit</button>
        
        <p  className='thanks'> {result}</p>
      </form>
      </div>
    </div>
  );
}



