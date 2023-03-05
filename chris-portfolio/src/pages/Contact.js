import React, { useState } from "react";
import {  FaGithubAlt, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import '../styles/contact.css'
import '../styles/index.css'

export default function Contact() {

  return (
  <section id="contact">
    <h3 style={{textAlign:'center', fontSizeAdjust:'inherit', marginBottom:'10px'}}>Contact</h3>
    <div className='col-12' style={{display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
      <div className='m-4'>
        <a href='mailto:hongchris97@gmail.com?subject=Mail from Portfolio' target='__blank'>  
          <FaEnvelope size={30} id='clicks'
            // style={{color: 'white'}} 
          />
        </a>
        <p className="row">   
          honggchriss@gmail.com           
        </p>
      </div>
      <div className='m-4'>
        <a href='https://github.com/c1008h' target='__blank'>
          <FaGithubAlt size={30} id='clicks'/></a>
        <p>@c1008h</p>
      </div>
      <div className='m-4'>
        <a href='https://www.linkedin.com/in/hong-chris/' target='__blank'>
            <FaLinkedin size={30} id='clicks'/>
        </a>
        <p className="row">Let's Connect!</p>
      </div>
    </div>
    
    
  </section>
  );
}
