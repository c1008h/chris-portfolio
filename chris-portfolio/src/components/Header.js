import React, {useState, useEffect} from 'react';
import {FaChevronDown} from 'react-icons/fa'
import {Button} from 'react-bootstrap'
import { Link } from 'react-scroll';
import '../styles/header.css'

export default function Header() {
  const [letters, setLetters] = useState([]);
  const name = "CHRIS_HONG";

  useEffect(() => {
    let timeoutId;
    const animateLetters = (index) => {
      timeoutId = setTimeout(() => {
        setLetters((prevLetters) => [...prevLetters, name[index]]);
        if (index < name.length - 1) {
          animateLetters(index + 1);
        }
        return
      }, 500);
    };
    animateLetters(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


    return (
    
    <header id='homepage' className='col-12'>
      <div id='home'>
        <div className='name-container'>
          <h1 className="name">
            {letters.map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
            ))}
          </h1>
        </div>
        <div className='col-12' style={{justifyContent:'center', textAlign:'center'}}>
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
