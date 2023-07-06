import React from 'react';
import {FaChevronDown, FaGithubAlt, FaLinkedin, FaEnvelope} from 'react-icons/fa'
// import { Button } from 'react-bootstrap'
import { Link } from 'react-scroll';
import '../styles/header.css'

export default function Header() {
  // const [letters, setLetters] = useState([]);
  // const name = "CHRIS_HONG";

  // useEffect(() => {
  //   let timeoutId;
  //   const animateLetters = (index) => {
  //     timeoutId = setTimeout(() => {
  //       setLetters((prevLetters) => [...prevLetters, name[index]]);
  //       if (index < name.length - 1) {
  //         animateLetters(index + 1);
  //       }
  //       return
  //     }, 500);
  //   };
  //   animateLetters(0);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);


    return (
    
    <header id='homepage' className='col-12'>
      <div id='home'>
        {/* <div className='name-container'>
          <h1 className="name">
            {letters.map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
            ))}
          </h1>
        </div> */}
        <div id='name-container' style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
          <span id='greet'>Hi, my name is</span>
          <span id='name'>Chris Hong.</span>
          <span id='title'>I'm a software developer with a background in anthropology and a passion for creating accessible, user-friendly technology. </span>
          <div id='socialcontainer'>
            <a href='mailto:hongchris97@gmail.com?subject=Mail from Portfolio' target='__blank'>  
              <FaEnvelope size={30} id='socials' />
            </a>
            <a href='https://github.com/c1008h' target='__blank'>
            <FaGithubAlt size={30} id='socials'/></a>
            <a href='https://www.linkedin.com/in/hong-chris/' target='__blank'>
              <FaLinkedin size={30} id='socials'/>
            </a>
          </div>
        </div>

        <div className='col-12' style={{display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
          <Link activeClass='active' to='about' spy={true}
            smooth={true} offset={0} duration={500}>
            <FaChevronDown size={105} id='downBtn'/>
            {/* <button id='downBtn'>More Info</button> */}

          </Link>
        </div>

      </div>
    </header>
  );
  
}
