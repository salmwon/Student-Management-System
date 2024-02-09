import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Images/logo.png'
import { Link } from 'react-router-dom';

function HeaderStud() {
  return (
    <Navbar expand="lg" className='bg-dark-emphasis'>
      <Container fluid>
        <Link to={'/studenthome'}><Navbar.Brand href="#"><img className='w-25 ms-3' src={logo} alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link style={{ textDecoration:'none'}} to={'/studenthome'}><Nav.Link href="#action1">Home</Nav.Link></Link>
            <Link style={{ textDecoration:'none'}} to={'/applyleave'}><Nav.Link href="#action2">Apply Leave</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to={'/viewnotes'}><Nav.Link href="#action3">View Notes</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to={'/subassign'}><Nav.Link href="#action4">Submit Assignment</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to={'/studannouncements'}><Nav.Link href="#action5">Announcements</Nav.Link></Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link className='ms-1' href="#action5"><i class="fa-solid fa-user"></i>Welcome <p>Student</p></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderStud