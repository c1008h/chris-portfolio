import React, { Component } from 'react';
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Projects'
import Header from './Header'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

export default class MiddleSection extends Component { 
    render() {
        const Navbar = () => {
            if(window.location.pathname !== '/#home'){
                return (
                <nav id="navbar" className="navbar col-12 navbar-expand-lg navbar-light bg-light" 
                style={{
                    height: '90px', 
                    justifyContent:'space-around', 
                    position:'fixed', 
                    top:'0',
                    zIndex:'auto'
                    }}>
                    <a 
                    // className={`navbar-brand col-3 nav-link`}
                        className={`navbar-brand col-3 nav-link ${window.location.pathname === '/home' ? 'active' : ''}`}
                        href='#home'>Chris Hong
                    </a>
                    <a
                    href="#about"
                    // className={`nav-link`}
                    className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`}
                    >About</a>
                    <a
                                        // className={`nav-link`}

                    href="#projects"
                    className={`nav-link ${window.location.pathname === '/projects' ? 'active' : ''}`}
                    >Projects</a>
                    <a
                    href="#resume"
                    // className={`nav-link`}

                    className={`nav-link ${window.location.pathname === '/resume' ? 'active' : ''}`}
                    >Resume</a>
                    <a 
                                        // className={`nav-link`}

                    href="#contact"
                    className={`nav-link ${window.location.pathname === '/contact' ? 'active' : ''}`}
                    >Contact</a>
                </nav>
                );
            }
            return null;
          }
        return (
        <>
            <Header/>
            <Navbar/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </>
        )
    }
}
