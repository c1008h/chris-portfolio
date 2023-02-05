import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ProjectModal(props) {
    return (
        <Modal id={props.item.id} show={props.show[props.item.id]} onHide={() => props.handleClose(props.item.id)}>
            <Modal.Header closeButton>
                <Modal.Title className="col-5">{props.item.title}</Modal.Title>
                <p className="col-3" style={{}}>{props.item.subtitle}</p>
            </Modal.Header>
            <Modal.Body style={{margin:'2px'}}>
                <img src={props.item.demo} style={{width:'85%', justifyContent:'center'}} alt='short demo of app'/>
                <br/>
                {props.item.description}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.handleClose(props.item.id)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}