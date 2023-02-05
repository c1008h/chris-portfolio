import React from 'react';
import { Link } from 'react-scroll';
import { NavbarContext } from '../utils/nav';
import '../styles/index.css'

export default function Navbar () {
    const { state } = React.useContext(NavbarContext);
    const className = `navbar ${state.isNavbarVisible ? 'visible' : 'hidden'}`;

    if (window.location.pathname === '/') return null;  // added this line

    return(
        <>
       
        <nav id="navbar"
        // className='navbar col-12 navbar-expand-lg navbar-light bg-light'
        className={className}
        // style={{
        //     // display: show ? "transparent" : "none",
        //     // height: '90px', 
        //     // justifyContent:'space-around', 
        //     // position:'fixed', 
        //     // top:'-90px',
        //     // zIndex:'1',
        //     // transition: "top 0.3s"
        //     }}
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
            <a 
            className='nav-link'
            activeclass='active' 
            href='https://drive.google.com/file/d/1mmxENAWmGR-kCLRhwntKdHgjEpzqf0jN/view?usp=sharing' 
            target="_blank" rel='noreferrer'>
                Resume
            </a>
            <Link 
            className='nav-link'
            activeClass='active' to='contact' spy={true}
            smooth={true} offset={-750} duration={500}>
                Contact
            </Link>
        
        </nav> 
      
        </>
        
    )
        
    
}
