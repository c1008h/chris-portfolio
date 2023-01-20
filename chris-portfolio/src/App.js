import React, {Component} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Projects'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

export default function App() {
  
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