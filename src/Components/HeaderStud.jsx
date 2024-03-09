import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthenticationContext } from '../Context API/Auth';
import { Spinner } from 'react-bootstrap';

function HeaderStud() {
  const student = sessionStorage.getItem("studentname")
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthenticationContext)
  const [loginDealy, setLoginDelay] = useState(false)
  const navigate = useNavigate()
  const handleLogout = () => {
    setIsAuthorised(false)
    setLoginDelay(true)
    setTimeout(() => {
      navigate('/')
      setLoginDelay(false)
      sessionStorage.removeItem("studentname")
      sessionStorage.removeItem("registerno")
    }, 2000);
  }
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
            <Link style={{ textDecoration: 'none' }} to={'/studenthome'}><Nav.Link href="#action1">Home</Nav.Link></Link>
            <Link style={{ textDecoration: 'none' }} to={'/applyleave'}><Nav.Link href="#action2">Apply Leave</Nav.Link></Link>
            <Link style={{ textDecoration: 'none' }} to={'/viewnotes'}><Nav.Link href="#action3">View Notes</Nav.Link></Link>
            <Link style={{ textDecoration: 'none' }} to={'/studannouncements'}><Nav.Link href="#action5">Announcements</Nav.Link></Link>
            <Button onClick={handleLogout} variant="outline-secondary" style={{ marginLeft: '280px' }}><i class="fa-solid fa-right-from-bracket me-1"></i>Logout {loginDealy && <Spinner animation="border" variant="primary" />}</Button>
          </Nav>
          <Nav.Link className='me-5 mt-3' href="#action5"><h4><i class="fa-solid fa-user me-1"></i>Welcome,<p className='ms-3 mt-1'>{student}</p></h4></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderStud