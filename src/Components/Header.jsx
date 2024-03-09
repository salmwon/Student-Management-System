import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import { tokenAuthenticationContext } from '../Context API/Auth';

function Header() {
  const{isAuthorised, setIsAuthorised}=useContext(tokenAuthenticationContext)
  const [loginDealy, setLoginDelay] = useState(false)
  const navigate=useNavigate()
  const handleLogout=()=>{
    setIsAuthorised(false)
    setLoginDelay(true)

    setTimeout(() => {
      navigate('/')
      setLoginDelay(false)
      sessionStorage.removeItem("studentname")
    }, 2000);
  }
  return (
    <Navbar expand="lg" className='bg-dark-emphasis'>
      <Container fluid>
        <Link to={'/adminhome'}><Navbar.Brand href="#"><img className='w-25 ms-3' src={logo} alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link style={{ textDecoration:'none'}} to={'/adminhome'}><Nav.Link href="#action1">Home</Nav.Link></Link>
            <Link style={{ textDecoration:'none'}} to={'/leavemanagement'}><Nav.Link href="#action2">Leave management</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to={'/notes'}><Nav.Link href="#action3"> Notes</Nav.Link></Link>
            <Link style={{textDecoration:'none'}} to={'/announcements'}><Nav.Link href="#action5">Announcements</Nav.Link></Link>
            <Button onClick={handleLogout}  variant="outline-secondary"  style={{marginLeft:'280px'}}><i class="fa-solid fa-right-from-bracket me-1"></i>Logout {loginDealy && <Spinner animation="border" variant="danger" />}</Button>
          </Nav>
          <Nav.Link className='me-5 mt-3' href="#action5"><h4><i class="fa-solid fa-gear me-1"></i>Welcome,<p className='ms-3 mt-1'>ADMIN</p></h4></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header