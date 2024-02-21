import React, { useEffect, useState } from "react";
import { Header, Footer, Navbar } from './components'
import { Skills, Experience, Contact, About, Loading, Projects } from './pages'
import { NavbarProvider } from "./utils/nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

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
        <Loading />
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