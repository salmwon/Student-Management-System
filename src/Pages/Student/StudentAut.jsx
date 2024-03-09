import React, { useContext, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import studentlogin from '../Student/images/studentlogin.png'
import studentregister from '../Student/images/studentregister.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { studentLoginAPI, studentRegisterAPI } from '../../Services/allAPIs'
import { tokenAuthenticationContext } from '../../Context API/Auth'

function StudentAut({ insideRegister }) {
  const [userData, setUserData] = useState({
    studentname: "", registerno: "", password: ""
  })
  const navigate = useNavigate()
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthenticationContext)
  const[loginDealy,setLoginDelay]=useState(false)
  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(userData);
    const { studentname, registerno, password } = userData
    if (!studentname || !registerno || !password) {
      toast.warning('please fill the form completely')
    } else {
      //Api call
      try {
        const result = await studentRegisterAPI(userData)
        console.log(result);
        if (result.status === 200) {
          toast.success(`${result.data.studentname} Registered Successfully`)
          setUserData({ studentname: "", registerno: "", password: "" })
          setTimeout(() => {
            navigate('/student-login')
          }, 3000)

        } else {
          toast.warning(`${result.response.data}`)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { registerno, password } = userData
    if (!registerno || !password) {
      toast.warning('please fill the form completely')
    } else {
      try {
        const result = await studentLoginAPI({ registerno, password })
        console.log(result);
        if (result.status === 200) {
          sessionStorage.setItem("studentname", result.data.existingUser.studentname)
          sessionStorage.setItem("registerno", result.data.existingUser.registerno)
          setIsAuthorised(true)
          setLoginDelay(true)
          setTimeout(()=>{
            setUserData({ registerno: "", password: "" })
            navigate('/studenthome')
            setLoginDelay(false)
          },2000);
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
      <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh', backgroundImage: `url("https://png.pngtree.com/background/20230413/original/pngtree-commercial-office-light-background-picture-image_2422976.jpg")` }}>
        <div className="container w-75">
          <Link to={'/'}> <i className='fa-solid fa-arrow-left me-1'></i>Back to Home</Link>
          <div className='shadow p-5 rounded' style={{ backgroundImage: `url("https://wallpaperset.com/w/full/7/5/a/545589.jpg")` }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                {insideRegister ? <img className='w-75' src={studentregister} alt="" /> : <img className='w-75' src={studentlogin} alt="" />}
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center flex-column">
                  {insideRegister ? <h1 className='fw-bolder text-danger-emphasis mt-2'>Student register</h1> :
                    <h1 className='fw-bolder text-danger-emphasis mt-2'>student login</h1>}
                  <h5 className='fw-bolder mt-2 pb-3 text-dark'>
                    {insideRegister ? 'Sign up to your account' : 'Sign in to your account'}
                  </h5>
                  <Form className='w-100'>
                    {insideRegister && (
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Student Name" onChange={(e) => setUserData({ ...userData, studentname: e.target.value })} value={userData.studentname} />
                      </Form.Group>
                    )}

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                      <Form.Control type="number" placeholder="Enter Register number" onChange={(e) => setUserData({ ...userData, registerno: e.target.value })} value={userData.registerno} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                    </Form.Group>
                    {
                      insideRegister ?
                        <div>
                          <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                          <p>Already have an account? Click here to <Link to={'/student-login'}>Login</Link></p>
                        </div> :
                        <div>
                          <button onClick={handleLogin} className='btn btn-light mb-2'>Login { loginDealy && <Spinner animation="border" variant="primary" />}</button>
                          <p>New User? Click Here to <Link to={'/student-register'}>Register</Link></p>
                        </div>

                    }

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

export default StudentAut