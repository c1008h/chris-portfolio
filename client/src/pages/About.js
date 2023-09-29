import React from 'react';
import '../styles/index.css'

export default function About() {

  return (
    <section id='about'>
        <div className='col-12' style={{marginBottom:'10px'}}>
            <h3 style={{textAlign:'center', fontSizeAdjust:'inherit'}}>About Me</h3>
        </div>
        <div className='col-12'> 
          <img id='chrisPic' src='./images/Chris_Likedin_5star.png' alt='chris' 
          style={{
            height:'200px', width:'auto', borderRadius:'50%', display:'block', margin:'auto'
          }}/>
          <p className='col-8 mt-3' style={{
            fontSize: '16px', 
            margin: 'auto'
            }}>
              Welcome to my portfolio!  
              <br/>
              <br/>
              My academic background in anthropology has helped me develop a strong understanding of user needs and behavior, which I bring to my work in technology.
              During my undergraduate studies, I explored my interests in technology and informatics, which ultimately led me to enroll in a Fullstack Coding Bootcamp after graduation. 
              Since then, I've been constantly learning and expanding my skills in software engineering. 
              <br/>
              <br/>
              I'm an analytical problem solver with a keen attention to detail, and I approach every project with organization, motivation, and focus.
              At the heart of my work is a desire to create technology that's accessible to all users, regardless of their abilities. 
              I believe that technology should be inclusive and user-centered, and I'm committed to contributing to that goal through my work as a software professional.
              <br/>
              <br/>
              I am currently actively seeking new opportunities as a software developer and would love to discuss any potential positions or collaborations. 
              Please don't hesitate to reach out to me if you have any leads or would like to chat further about my skills and experience. 
              Thanks for stopping by! 
          </p>
        </div>
    </section>
  );
}
