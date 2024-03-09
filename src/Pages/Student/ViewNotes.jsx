import React, { useEffect, useState } from 'react'
import HeaderStud from '../../Components/HeaderStud'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer';
import { getAllNotesAPI } from '../../Services/allAPIs';
import { SERVER_URL } from '../../Services/serverUrl';
import 'animate.css'
function ViewNotes() {

  const [allNotes, setAllNotes] = useState([])

  const getAllNotes = async () => {
    const result = await getAllNotesAPI()
    if (result.status === 200) {
        setAllNotes(result.data)
    } else {
        console.log(result);
    }
}

useEffect(() => {
  getAllNotes()
},[])


  return (
    <>
    <HeaderStud/>
    <h4 className='mb-5' style={{ textAlign: 'center' }}>Uploaded notes</h4>
            <div className='container d-flex justify-content-between flex-wrap align-items-center'>
                {allNotes?.map((notes, index) => (
                    <Card className='me-5 mb-3 animate__animated animate__fadeInUp' style={{ width: '18rem' }}>
                        <iframe style={{ width: '300px', height: '150px' }} src={`${SERVER_URL}/leaveuploads/${notes.notesDoc}`} frameborder="0"></iframe>
                        <Card.Body className='text-center'>
                            <Card.Title>{notes.notesDoc}</Card.Title>
                            <a href={`${SERVER_URL}/leaveuploads/${notes.notesDoc}`} without rel="noopener noreferrer" target="_blank"><Button >View</Button></a>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
                }
            </div>
    <Footer/>
    </>
  )
}

export default ViewNotes