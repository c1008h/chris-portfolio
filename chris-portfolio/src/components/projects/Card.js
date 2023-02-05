import React, {useState} from "react";
import {  FaGithubAlt } from 'react-icons/fa'
import { ghprojects } from "../../data"
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import ProjectModal from './Modal.js'
export default function Card() {
  const [show, setShow] = useState({});

  const handleClose = (id) => {
    setShow((prevState) => ({ ...prevState, [id]: false }));
  };

  const handleShow = (id) => {
    setShow((prevState) => ({ ...prevState, [id]: true }));
  };

  return (
    <div className="flex flex-wrap m-1 row">

      {ghprojects.map((item) => (
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div style={{
          marginBottom:'5%', 
          marginTop:'5%', 
          border: 'solid grey', 
          padding: '5%',
          borderRadius:'25px',
          filter:"drop-shadow(0px 20px 30px black"
          }} key={item.id}>
          <h3 className="mb-3 col-12" style={{whiteSpace:'nowrap',}} key={item.title}>
            {item.title}
          </h3>
          <div className="flex relative" id='portfolioSquares'>
              <a key={item.link} href={item.link} rel='noeferrer' target='__blank'>
                <img 
                  alt="gallery"
                  className="col-10 m-4"
                  key={item.image}
                  src={item.image}
                  style={{height:'250px', width:'85%', objectFit:'cover', opacity:'.85'}}
                />
              </a>
          </div> 
          
          <div className='d-flex flex-row justify-content-center'>
            <div className="col-12" style={{display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center'}}> 
              <a key={item.github} href={item.github} rel="noreferrer"
                target="_blank" className='col-7'>
                <FaGithubAlt size={25} id='clicks'/>
              </a>
              
              <button type='button' key={item.id} className='btn btn-dark col' id='description' 
                onClick={() => handleShow(item.id)}>
                  Description
              </button>
              <ProjectModal handleClose={handleClose} item={item} show={show}
              />
              
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}