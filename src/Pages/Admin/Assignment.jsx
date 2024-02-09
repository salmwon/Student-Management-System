import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function Assignment() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <div>
                <h3 className='text-center mb-5'>Post Assignment</h3>
                <Button onClick={handleShow} style={{ marginLeft: '46%' }} >Click here!!</Button>
                <div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Post Assignment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Assignment topic' />
                                </div>
                                <div className="mb-3">
                                    <input type="date" className='form-control' placeholder='Submission date' />
                                    <h6 className='text-center mt-2'>Submission date</h6>
                                </div>
                                <div className="mb-3">
                                    <input type="textarea" className='form-control' placeholder='Assignment Question' />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className='form-control' placeholder='Maximum Marks' />
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary">Post assignment</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Register no</th>
                            <th>Assignments Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>5462</td>
                            <td><i class="fa-solid fa-file"></i></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    )
}

export default Assignment