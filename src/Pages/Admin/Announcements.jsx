import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function Announcements() {
    return (
        <>
            <Header />
            <div className='container'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Announcements</Form.Label>
                        <Form.Control className='border shadow rounded' style={{backgroundColor:'#DCDCDC'}} as="textarea" rows={4} placeholder='Type announcements Here!!' />
                    </Form.Group>
                </Form>
                <Button style={{marginLeft:'40%'}}>Submit Announcement</Button>
            </div>
            <Footer />
        </>
    )
}

export default Announcements