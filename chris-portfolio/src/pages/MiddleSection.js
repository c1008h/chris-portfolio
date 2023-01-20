import React, { Component } from 'react';
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Projects'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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
