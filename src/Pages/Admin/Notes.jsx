import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import NotesUpload from '../../Components/NotesUpload'
import { Button, Card } from 'react-bootstrap'

function Notes() {
    return (
        <>
            <Header />
            <div>
                <div><h2 style={{ textAlign: 'center' }}>Upload notes Here</h2></div>
                <div style={{ marginLeft: '46%' }}><NotesUpload /></div>
            </div>
            <hr />
            <div className='container'>
                <h4 style={{ textAlign: 'center' }}>Uploaded notes</h4>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">View File</Button>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    )
}

export default Notes