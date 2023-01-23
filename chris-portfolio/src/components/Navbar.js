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
                zIndex:'1000'
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
                <a 
                className='nav-link'
                activeclass='active' 
                href='https://drive.google.com/file/d/131hVn5qI4Hll1IutF_Z6SGg1E6NakaKi/view?usp=sharing' 
                target="_blank" rel='noreferrer'>
                    Resume
                </a>
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
