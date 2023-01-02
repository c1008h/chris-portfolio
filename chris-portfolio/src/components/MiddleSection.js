import React, { Component } from 'react';
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Projects'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

export default class MiddleSection extends Component { 
    render() {
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
