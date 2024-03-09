import React, { useEffect } from 'react'
import HeaderStud from '../../Components/HeaderStud'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Footer from '../../Components/Footer';
import { leaveSubmitAPI } from '../../Services/allAPIs';


function ApplyLeave() {
    const [fileStatus, setFileStatus] = useState(false)
    const [show, setShow] = useState(false);
    const registerno=sessionStorage.getItem("registerno")
    const [leaveData, setLeaveData] = useState({
        fname: "", lname: "", regno: registerno, days: "", reason: "", leaveDoc: ""
    })
    console.log(leaveData);
    const handleClose = () => {
        setShow(false)
        setFileStatus({
            fname: "", lname: "", regno: "", days: "", reason: "", leaveDoc: ""
        })
    }
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (leaveData.leaveDoc.type == "application/pdf") {
            console.log("continue");
            setFileStatus(false)
        } else {
            console.log("please upload pdf file");
            setFileStatus(true)
            setLeaveData({ ...leaveData, leaveDoc: "" })
        }
    }, [leaveData.leaveDoc])

    const handleSubmit = async () => {
        const { fname, lname, regno, days, reason, leaveDoc } = leaveData
        if (!fname || !lname || !regno || !days || !reason || !leaveDoc) {
            toast.info("Please fill the Form Completely")
        } else {
            //api call
            const reqBody = new FormData()
            reqBody.append("fname", fname)
            reqBody.append("lname", lname)
            reqBody.append("regno", regno)
            reqBody.append("days", days)
            reqBody.append("reason", reason)
            reqBody.append("leaveDoc", leaveDoc)

            const reqHeader = {
                "Content-Type": "multipart/form-data"
            }

            //api call
            try{const result = await leaveSubmitAPI(reqBody, reqHeader)
            //console.log(result);
            if (result.status === 200) {
                console.log(result.data);
                handleClose()
                toast.success("Leave application Submitted successfully")
            }else{
                toast.warning(result.response.data)
            }
        }catch(err){
            console.log(result);
        }
        }
    }
    
    return (
        <>
            <HeaderStud />
            <h1 className='text-center mb-5'>Apply For Leave</h1>
            <Button onClick={handleShow} style={{ marginLeft: '46%' }}>Click Here</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Leave Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='First Name' onChange={e => setLeaveData({ ...leaveData, fname: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Last Name' onChange={e => setLeaveData({ ...leaveData, lname: e.target.value })} />
                        </div>
                        {/* <div className="mb-3">
                            <input type="number" className='form-control' placeholder='Register No' onChange={e => setLeaveData({ ...leaveData, regno: e.target.value })} value={registerno} />
                        </div> */}
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Leave Reason' onChange={e => setLeaveData({ ...leaveData, reason: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="number" className='form-control' placeholder='Number of Days ' onChange={e => setLeaveData({ ...leaveData, days: e.target.value })} />
                        </div>
                        <h6 className='text-center mb-3'>Upload necessary documents here pdf only</h6>
                        <div className="mb-3">
                            <input type="file" className='form-control' onChange={e => setLeaveData({ ...leaveData, leaveDoc: e.target.files[0] })} />
                        </div>
                        {fileStatus && <div className='text-danger  ms-4 fw-bold'>Please Upload pdf File</div>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleSubmit} variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
            <Footer />
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default ApplyLeave