import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getAllLeaveAPI, leaveRemoveAPI } from '../../Services/allAPIs';
import { SERVER_URL } from '../../Services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LeaveManagement(leave) {



  const [allLeave, setAllLeave] = useState([])
  console.log(allLeave);
  const getAllLeave = async () => {
    const result = await getAllLeaveAPI()
    if (result.status === 200) {
      setAllLeave(result.data)
    } else {
      console.log(result);
    }
  }

  useEffect(() => {
    getAllLeave()
  }, [])

  const handleDeleteLeaveApprove = async (pid) => {
    try {
      const result = await leaveRemoveAPI(pid)
      if (result.status === 200) {
        getAllLeave()
        toast.success("Leave Request Approved")
      } else {
        toast.warning(result.response.data)
      }

    } catch (err) {
      console.log(err);
    }
  }
  const handleDeleteLeaveReject = async (pid) => {
    try {
      const result = await leaveRemoveAPI(pid)
      if (result.status === 200) {
        getAllLeave()
        toast.warning("Leave Request Rejected")
      } else {
        toast.warning(result.response.data)
      }

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Header />
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Register No</th>
            <th>Leave Reason</th>
            <th>Number of days</th>
            <th>Proof</th>
            <th>approve/reject</th>
          </tr>
        </thead>
        {allLeave?.map((leave, index) => (
          <tbody>
            <tr className='animate__animated animate__fadeIn'>
              <td>{index + 1}</td>
              <td>{leave.fname}</td>
              <td>{leave.lname}</td>
              <td>{leave.regno}</td>
              <td>{leave.reason}</td>
              <td>{leave.days}</td>
              <td><a href={`${SERVER_URL}/leaveuploads/${leave.leaveDoc}`} without rel="noopener noreferrer" target="_blank"><Button>View PDF</Button></a></td>
              <td><ButtonGroup aria-label="Basic example">
                <Button onClick={() => handleDeleteLeaveApprove(leave?._id)} variant="success">Approve</Button>
                <Button onClick={() => handleDeleteLeaveReject(leave?._id)} variant="danger">Reject</Button>
              </ButtonGroup></td>
            </tr>
          </tbody>
        ))
        }
      </Table>
      <Footer />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default LeaveManagement