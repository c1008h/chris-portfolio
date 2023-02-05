import React from 'react';
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Project from './Projects'
import Navbar from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

export default function MiddleSection() { 

    return (
        <>
            <Navbar/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
        </>
    )
}
