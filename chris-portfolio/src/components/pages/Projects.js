import {React, useState} from "react";
import {  FaGithubAlt } from 'react-icons/fa'
import { ghprojects } from "../../data"
import '../styles/index.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Projects() {
  const [show, setShow] = useState({});

  const handleClose = (id) => {
    setShow((prevState) => ({ ...prevState, [id]: false }));
  };

  const handleShow = (id) => {
    setShow((prevState) => ({ ...prevState, [id]: true }));
  };

  return (
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40 col-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              My Projects
          </h1>

        <div className="flex flex-wrap m-1 row">

          {ghprojects.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{
              marginBottom:'5%', 
              marginTop:'5%', 
              border: 'solid grey', 
              padding: '5%',
              borderRadius:'25px'
              }} key={item.id}>
              <h2 className="mb-3 col-12" style={{width:'90%', height:'15%'}} key={item.title} value={item.title}>
                {item.title}
              </h2>
              <div className="flex relative" id='portfolioSquares'>
                  <a key={item.link} href={item.link} rel='noeferrer' target='__blank'>
                    <img 
                      key={item.image}
                      alt="gallery"
                      className="col-10 m-4"
                      src={item.image}
                      style={{height:'70%', width:'85%', opacity:'.85'}}
                    />
                  </a>
              </div> 
              
              <div className='d-flex flex-row justify-content-center'>
                <div className="col-12" style={{display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}> 
                  <a key={item.github} href={item.github} rel="noreferrer"
                  target="_blank" className='col-7'>
                    <FaGithubAlt size={25}/>
                  </a>
                  
                  <button type='button' className='btn btn-dark col' id='description' 
                  onClick={() => handleShow(item.id)}>
                      Description
                  </button>

                  <Modal id={item.id} show={show[item.id]} onHide={() => handleClose(item.id)}>
                    <Modal.Header closeButton>
                      <Modal.Title className="col-5">{item.title}</Modal.Title>
                      <p className="col-3" style={{}}>{item.subtitle}</p>
                    </Modal.Header>
                    <Modal.Body>
                      <img src={item.demo} alt='short demo of app'/>
                      {item.description}
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => handleClose(item.id)}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>

            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
