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
              With a background in anthropology, I've cultivated a unique perspective on user needs and behaviors, which I seamlessly integrate into my work in technology. My academic journey ignited a passion for technology and informatics, compelling me to enroll in a Fullstack Coding Bootcamp post-graduation. Since then, my journey has been one of continuous growth and skill expansion in the realm of software engineering.
              <br/>
              <br/>
              As an analytical problem solver, I thrive on unraveling complexities with meticulous attention to detail. Every project I undertake is approached with a blend of organization, motivation, and unwavering focus. At the core of my ethos lies a deep-seated belief in creating technology that's universally accessible, regardless of users' abilities. I'm a staunch advocate for inclusive, user-centered design, and I'm dedicated to furthering this mission through my work as a software professional.              <br/>
              <br/>
              Currently, I'm actively seeking new opportunities in software development and am eager to explore potential positions or collaborations. Whether you have leads to share or simply want to delve deeper into my skills and experiences, I'm always open to connecting. Thank you for taking the time to visit my portfolio, and I look forward to the possibility of working together!
          </p>
        </div>
    </section>
  );
}
