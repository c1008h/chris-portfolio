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
              Full-Stack developer with a strong background in customer service to deliver satisfaction through simplifying complex applications. 
              Earned a certificate in Full Stack Web Development from the University of Washington Coding Boot Camp with hands-on experience in HTML, CSS, JavaScript, React, and jQuery. 
              Driven to solve challenging problems and collaborate with a passionate team to build creative projects from ideation to execution. 
              I enjoy organizing code for easier collaboration and troubleshooting. 
              With a customer service mindset, I excel at improving user experiences through increased accessibility.
          </p>
        </div>
    </section>
  );
}
