import React, { useEffect, useState } from 'react'
import HeaderStud from '../../Components/HeaderStud'
import Alert from 'react-bootstrap/Alert';
import Footer from '../../Components/Footer';
import { announceRemoveAPI, getAllAnnouncementAPI } from '../../Services/allAPIs';
import CloseButton from 'react-bootstrap/CloseButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'

function StudAnnouncements() {
    const [show, setShow] = useState(true);
    const[allAnnounce,setAllAnnounce]=useState([])

    const getAllAnnounce = async () => {
        const result = await getAllAnnouncementAPI()
        if (result.status === 200) {
          setAllAnnounce(result.data)
        } else {
          console.log(result);
        }
      }
      console.log(allAnnounce);


const handleDeleteAnnounce = async (pid) => {
    try {
      const result = await announceRemoveAPI(pid)
      if (result.status === 200) {
        toast.success("Announcement cleared")
        getAllAnnounce()
      } else {
        toast.warning(result.response.data)
      }

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllAnnounce()
    
  }, [])

    return (
        <>
            <HeaderStud />
            <div className='container'>
                {allAnnounce?.map((announcement, index) => ( 
                <Alert className='animate__animated animate__fadeInRight' variant="success" onClick={()=>handleDeleteAnnounce(announcement?._id)}  dismissible>
                <Alert.Heading>{announcement.subject}</Alert.Heading>
                <p>
                  {announcement.announce}
                </p>
                <hr />
                {announcement.time}
              </Alert>
                ))    
            }
            </div>
            <Footer/>
            <ToastContainer autoClose={3000} />
        </>
     ) 
}

export default StudAnnouncements