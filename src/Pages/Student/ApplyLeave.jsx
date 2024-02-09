import React from 'react'
import HeaderStud from '../../Components/HeaderStud'
import { Button } from 'react-bootstrap'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Footer from '../../Components/Footer';


function ApplyLeave() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <HeaderStud />
            <h1 className='text-center mb-5'>Apply For Leave</h1>
            <Button onClick={handleShow} style={{ marginLeft: '46%' }}>Click Here</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Leave Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='First Name' />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Last Name' />
                        </div>
                        <div className="mb-3">
                            <input type="number" className='form-control' placeholder='Register No' />
                        </div>
                        <div className="mb-3">
                            <input type="number" className='form-control' placeholder='Leave Reason' />
                        </div>
                        <div className="mb-3">
                            <input type="number" className='form-control' placeholder='Number of Days ' />
                        </div>
                        <h6 className='text-center mb-3'>Upload necessary documents here</h6>
                        <div className="mb-3">
                            <input type="file" className='form-control' placeholder='Number of Days ' />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
            <Footer/>
        </>
    )
}

export default ApplyLeave