import React, { useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postAnnouncementAPI } from '../../Services/allAPIs';

function Announcements() {

    const [time, setTime] = useState(new Date());
    const [announcePublish, setAnnouncePublish] = useState({
        subject: "", announce: "", time: new Date()
    })
    const handleSubmit =async (e) => {
        e.preventDefault();
        const { subject,announce,time } = announcePublish
        if (!subject || !announce) {
            toast.warning('please fill the form completely')
        } else {
            //api call
            const result = await postAnnouncementAPI(announcePublish)
            if (result.status === 200) {
                toast.success("Announcement Published")
                document.getElementById('subject').value=''
                document.getElementById('announce').value='';
            }
        }

    }
    console.log(announcePublish);

    return (
        <>
            <Header />
            <div className='container'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Announcements</Form.Label>
                        <Form.Control className='border shadow rounded' style={{ backgroundColor: '#DCDCDC' }} as="textarea" rows={2} placeholder='Type announcement Subject Here' onChange={e => setAnnouncePublish({ ...announcePublish, subject: e.target.value })} id='subject'  />
                        <Form.Control className='border shadow rounded' style={{ backgroundColor: '#DCDCDC' }} as="textarea" rows={4} placeholder='Type announcements Here!!' onChange={e => setAnnouncePublish({ ...announcePublish, announce: e.target.value })} id='announce'/>
                    </Form.Group>
                </Form>
                <Button onClick={handleSubmit} style={{ marginLeft: '40%' }}>Submit Announcement</Button>
            </div>
            <Footer />
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default Announcements