import React, {useState, useEffect} from 'react';
import {FaArrowDown} from 'react-icons/fa'
import { Link } from 'react-scroll';
import '../styles/header.css'

export default function Header() {
  return (
    
    <header id='homepage' className='col-12'>
      <div id='home'>
        <pre className='responsive-headerline' id='name'>
          <code>
            &lt;h1&gt; Hi, my name is Chris! &lt;/h1&gt;
          </code>
        </pre>
        <Link activeClass='active' to='about' spy={true}
          smooth={true} offset={0} duration={500}>
          <FaArrowDown id='downBtn'/>
        </Link>
      </div>
    </header>
  );
  
}
