import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Button, Card, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllNotesAPI, notesSubmitAPI } from '../../Services/allAPIs';
import { SERVER_URL } from '../../Services/serverUrl';
import 'animate.css'
function Notes() {

    const [uploadNotes, setUploadNotes] = useState({
        notesDoc: ""
    })
    const [fileStatus, setFileStatus] = useState(false)

    const [allNotes, setAllNotes] = useState([])


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setFileStatus({
            notesDoc: ""
        })
    }
    const handleShow = () => setShow(true);
    console.log(allNotes);
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
        if (uploadNotes.notesDoc.type == "application/pdf") {
            console.log("continue");
            setFileStatus(false)
        } else {
            console.log("please upload pdf file");
            setFileStatus(true)
            setUploadNotes({ uploadNotes, notesDoc: "" })
        }
        
    }, [uploadNotes.notesDoc,allNotes])
    console.log(uploadNotes);
    const handleNotesUpload = () => async () => {
        const { notesDoc } = uploadNotes
        if (!notesDoc) {
            toast.warning("Please Upload pdf Notes")
        } else {
            //api call
            const reqBody = new FormData()
            reqBody.append("notesDoc", notesDoc)
            const reqHeader = {
                "Content-Type": "multipart/form-data"
            }
            //api call
            try {
                const result = await notesSubmitAPI(reqBody, reqHeader)
                //console.log(result);
                if (result.status === 200) {
                    console.log(result.data);
                    toast.success("Notes Uploaded Successfully")
                    handleClose()
                } else {
                    toast.warning(result.response.data)
                }
            } catch (err) {
                console.log(err);
            }
        }
    }



    return (
        <>
            <Header />
            <Button className='mt-5 mb-5' onClick={handleShow} style={{ marginLeft: '40%' }}>Click Here to Upload Notes</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Notes Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="mb-3">
                            <input type="File" className='form-control' placeholder='notes Upload'  onChange={e => setUploadNotes({ uploadNotes, notesDoc: e.target.files[0] })} />
                        </div>
                        {fileStatus && <div className='text-danger  ms-4 fw-bold'>Please Upload pdf File</div>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleNotesUpload()} variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
            <hr />
            <h4 className='mb-5' style={{ textAlign: 'center' }}>Uploaded notes</h4>
            <div className='container d-flex justify-content-between flex-wrap'>
                {allNotes?.map((notes, index) => (
                    <Card className='me-5 mb-3 animate__animated animate__fadeInUp' style={{ width: '18rem' }}>
                        <iframe style={{ width: '300px', height: '250px' }} src={`${SERVER_URL}/leaveuploads/${notes.notesDoc}`} frameborder="0"></iframe>
                        <Card.Body>
                            <Card.Title>{notes.notesDoc}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
                }
            </div>
            <Footer />
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default Notes

