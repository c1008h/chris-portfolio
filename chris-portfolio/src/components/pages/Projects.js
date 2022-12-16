import React, {useState} from "react";
import {  FaGithubAlt } from 'react-icons/fa'
import { Modal } from 'react-bootstrap';
import { ghprojects } from "../../data"
import '../styles/index.css'

export default function Projects() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40 col-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              My Projects
          </h1>

        <div className="flex flex-wrap m-1 row">
          {ghprojects.map((project) => (
            <div className="col-lg-6" style={{marginBottom:'5%', marginTop:'5%'}}>
              <h2 className="mb-3 col-12" key={project.title}>
                {project.title}
              </h2>
              <div className="flex relative" id='portfolioSquares'>
                  <a key={project.link} href={project.link} rel='noeferrer' target='__blank'><img 
                    key={project.image}
                    alt="gallery"
                    className="col-12 m-4"
                    src={project.image}
                    style={{height:'300px', opacity:'.85'}}
                  /></a>
              </div> 
              
              <div 
                className='d-flex flex-row justify-content-center'>
                  <div className="col-12" style={{display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}> 
                    <a key={project.github} href={project.github} rel="noreferrer"
                    target="_blank" className='col-7'>
                      <FaGithubAlt size={25}/>
                    </a>
                    <button type='button' 
                    className='btn btn-dark col' id='description'
                    variant="primary" onClick={handleShow} key={project.subtitle} value={project.subtitle}
                    >Description 
                    </button>

                    {ghprojects.map((project) => (
                      <Modal show={show} onHide={handleClose}>                      
                        <Modal.Header closeButton>
                          <Modal.Title key={project.title}>{project.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body key={project.subtitle}>{project.subtitle}</Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                      </Modal>
                   ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
