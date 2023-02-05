import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ProjectModal({handleClose, item, show}) {
    return (
        // <Modal id={props.item.id} show={props.show[props.item.id]} onHide={() => props.handleClose(props.item.id)}>
        //     <Modal.Header closeButton>
        //         <Modal.Title className="col-5">{props.item.title}</Modal.Title>
        //         <p className="col-3" style={{}}>{props.item.subtitle}</p>
        //     </Modal.Header>
        //     <Modal.Body style={{margin:'2px'}}>
        //         <img src={props.item.demo} style={{width:'85%', justifyContent:'center', borderRadius:'25px'}} alt='short demo of app'/>
        //         <br/>
        //         {props.item.description}
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant="secondary" onClick={() => props.handleClose(props.item.id)}>
        //             Close
        //         </Button>
        //     </Modal.Footer>
        // </Modal>

        <Modal key={item} id={item.id} show={show[item.id]} onHide={() => handleClose(item.id)}>
            <Modal.Header closeButton>
                <Modal.Title className="col-5" key={item.title}>{item.title}</Modal.Title>
                <p className="col-3" style={{}} key={item.subtitle}>{item.subtitle}</p>
            </Modal.Header>
            <Modal.Body style={{margin:'2px'}}>
                <div style={{textAlign:'center'}}>
                <img src={item.demo} style={{width:'85%', justifyContent:'center', borderRadius:'15px'}} alt='short demo of app'/>
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