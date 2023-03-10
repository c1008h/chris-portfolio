import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ProjectModal({handleClose, item, show}) {
    return (
        <Modal key={item} id={item.id} show={show[item.id]} onHide={() => handleClose(item.id)}>
            <Modal.Header closeButton>
                <Modal.Title className="col-5" key={item.title}>{item.title}</Modal.Title>
                <p className="col-3" style={{}} key={item.subtitle}>{item.subtitle}</p>
            </Modal.Header>
            <Modal.Body style={{margin:'2px'}}>
                <div style={{textAlign:'center'}}>
                <img src={item.demo} class='demo' alt='short demo of app'/>
                    <br/>
                    {item.description}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" id='description' onClick={() => handleClose(item.id)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}