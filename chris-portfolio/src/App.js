import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
// import Project from './pages/Projects'
import Contact from './pages/Contact'
import { NavbarProvider } from "./utils/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import Projects from "./pages/Projects";

export default function App() {
  
  return (
    <NavbarProvider>
      <Header/>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </NavbarProvider>
  )
}