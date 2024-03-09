import React, { useContext, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import adminlogin from '../Admin/images/adminlogin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { adminLoginAPI } from '../../Services/allAPIs';
import { tokenAuthenticationContext } from '../../Context API/Auth';


function AdminAut() {
  const [userData, setUserData] = useState({
    email: "", password: ""
  })
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthenticationContext)
  const navigate = useNavigate()
  const [loginDealy, setLoginDelay] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userData
    if (!email || !password) {
      toast.warning('please fill the form completely')
    } else {
      try {
        const result = await adminLoginAPI({ email, password })
        console.log(result);
        if (result.status === 200) {
          sessionStorage.setItem("studentname", result.data.existingAdmin.email)

          setIsAuthorised(true)
          setLoginDelay(true)

          setTimeout(() => {
            setUserData({ email: "", password: "" })
            navigate('/adminhome')
            setLoginDelay(false)
          }, 2000);

        } else {
          toast.warning(`${result.response.data}`)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh', backgroundImage: `url("https://wallpaperaccess.com/full/84248.png")`,backgroundSize:'cover' }}>
        <div className="container w-75">
          <Link to={'/'}> <i className='fa-solid fa-arrow-left me-1'></i>Back to Home</Link>
          <div className='shadow p-5 rounded' style={{ backgroundImage: `url("https://wallpaperaccess.com/full/84248.png")`,backgroundSize:'cover' }}>
            <div className="row align-items-center">
              <div className="col-lg-6" style={{opacity:'1'}}>
                <img src={adminlogin} alt="" />
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center flex-column">


                  <h1 className='fw-bolder mt-2'>Admin login</h1>
                  <h5 className='fw-bolder mt-2 pb-3 text-dark'>

                  </h5>
                  <Form className='w-100'>

                    <Form.Group className="mb-3 rounded" controlId="formBasicEmail" >
                      <Form.Control type="email" placeholder="Enter email " onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email} />
                    </Form.Group>
                    <Form.Group className="mb-3 rounded" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                    </Form.Group>
                    <div>
                      <button onClick={handleLogin} className='btn btn-light mb-2'>Login { loginDealy && <Spinner animation="border" variant="primary" />}</button>
                    </div>



                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default AdminAut