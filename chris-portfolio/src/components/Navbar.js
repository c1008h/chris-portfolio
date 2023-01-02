import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar"
            className='navbar col-12 navbar-expand-lg navbar-light bg-light'
            style={{
                height: '90px', 
                justifyContent:'space-around', 
                position:'fixed', 
                top:'0',
                zIndex:'auto'
                }}
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
                activeClass='active' to='resume' spy={true}
                smooth={true} offset={0} duration={500}>
                    Resume
                </Link>
                <Link 
                className='nav-link'
                activeClass='active' to='contact' spy={true}
                smooth={true} offset={-750} duration={500}>
                    Contact
                </Link>
            
            </div>
        )
    }
}

export default Navbar;
