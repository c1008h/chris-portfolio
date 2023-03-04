import React, {useState} from "react";
import {  FaGithubAlt } from 'react-icons/fa'
import { ghprojects } from "../../data"
import ProjectModal from './Modal.js'
import {Card} from 'react-bootstrap'

export default function CardProjects() {
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
        <Card className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom:'5%', 
        marginTop:'5%', borderRadius:'25px'}} key={item.id}> 
        <div id ='cards'
        style={{
        //   marginBottom:'5%', 
        //   marginTop:'5%', 
          padding: '5%',
          borderRadius:'25px',
        //   filter:"drop-shadow(0px 20px 30px black"
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
                  style={{height:'250px', width:'85%', objectFit:'cover', opacity:'.85', borderRadius:"5px"}}
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
        </Card>
      ))}
    </div>
  )
}