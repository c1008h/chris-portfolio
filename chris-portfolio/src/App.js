import React, { useEffect, useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { NavbarProvider } from "./utils/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import Projects from "./pages/Projects";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <NavbarProvider>
          <Header/>
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </NavbarProvider>
      )}
    </>
  )
}