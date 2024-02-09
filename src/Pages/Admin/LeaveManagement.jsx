import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';



function LeaveManagement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Header/>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Register No</th>
          <th>Leave Reason</th>
          <th>Number of days</th>
          <th>Proof</th>
          <th>approve/reject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>78562</td>
          <td>Fever</td>
          <td>3</td>
          <td><i class="fa-solid fa-file"></i></td>
          <td><ButtonGroup aria-label="Basic example">
      <Button onClick={handleShow} variant="success">Approve</Button>
      <Button onClick={handleShow} variant="danger">Reject</Button>
    </ButtonGroup></td>
        </tr>
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {<Modal.Body>are you sure you want to approve this leave request</Modal.Body>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            YES
          </Button>
          <Button variant="primary" onClick={handleClose}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
    <Footer/>
    </>
  )
}

export default LeaveManagement