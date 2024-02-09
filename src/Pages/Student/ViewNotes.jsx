import React from 'react'
import HeaderStud from '../../Components/HeaderStud'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';

function ViewNotes() {
  return (
    <>
    <HeaderStud/>
    <div className='container'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Module1.pdf</Card.Title>
            <Card.Text>
        
            </Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
    </div>
    <Footer/>
    </>
  )
}

export default ViewNotes