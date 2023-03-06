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
            fontSize: '20px', 
            margin: 'auto'
            }}>
              Hello, and welcome to my portfolio! 
              I'm a software developer with a background in anthropology and a passion for creating accessible, user-friendly technology. 
              My academic background in anthropology, the study of human behavior and society, has helped me develop a strong understanding of user needs and behavior, which I bring to my work in technology.
              During my undergraduate studies, I explored my interests in technology and informatics, which ultimately led me to enroll in a Fullstack Coding Bootcamp after graduation. 
              Since then, I've been constantly learning and expanding my skills as a software developer. 
              I'm an analytical problem solver with a keen attention to detail, and I approach every project with organization, motivation, and focus.
              At the heart of my work is a desire to create technology that's accessible to all users, regardless of their abilities. 
              I believe that technology should be inclusive and user-centered, and I'm committed to contributing to that goal through my work as a software developer.
              Thanks for stopping by! If you have any questions or would like to chat, please feel free to [Contact Form or Email Address].
          </p>
        </div>
    </section>
  );
}
