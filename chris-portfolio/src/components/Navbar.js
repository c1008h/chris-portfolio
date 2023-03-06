import React from 'react';
import { Link } from 'react-scroll';
import { NavbarContext } from '../utils/nav.js';
import '../styles/index.css'

export default function Navbar () {
    const { state } = React.useContext(NavbarContext);
    const className = `navbar ${state.isNavbarVisible ? 'visible' : 'hidden'}`;

    // if (window.location.pathname === '/') return null;  // added this line
    console.log('navbar')
    return(
        <>
       
        <nav id="navbar"
        className={className}
        >
            <Link 
            className='navbar-brand col-3 nav-link'
            activeClass='active' to='homepage' spy={true}
            smooth={true} offset={0} duration={500}>
                Chris Hong
            </Link>

            <Link 
            className='nav-link'
            activeClass='active' to='about' spy={true}
            smooth={true} offset={0} duration={500}>
                About
            </Link>
            <Link 
            className='nav-link'
            activeClass='active' to='projects' spy={true}
            smooth={true} offset={0} duration={500}>
                Projects
            </Link>
            <Link 
            className='nav-link'
            activeClass='active' to='experience' spy={true}
            smooth={true} offset={0} duration={500}>
                Experience
            </Link>
            <Link 
            className='nav-link'
            activeClass='active' to='contact' spy={true}
            smooth={true} offset={-750} duration={500}>
                Contact
            </Link>
            <button>
                <a href='https://drive.google.com/file/d/157zT_h-jEf0DpMbv1Zs64yn-oVH1MZlQ/view?usp=sharing' 
                target='_blank'
                rel='noreferrer'
                >Resume</a>
            </button>
        
        </nav> 
        </>
    )
}
