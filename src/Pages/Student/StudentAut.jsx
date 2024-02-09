import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import studentlogin from '../Student/images/studentlogin.png'
import studentregister from '../Student/images/studentregister.png'


function StudentAut({insideRegister}) {
  return (
    <>
<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh',backgroundImage:`url("https://png.pngtree.com/background/20230413/original/pngtree-commercial-office-light-background-picture-image_2422976.jpg")` }}>
      <div className="container w-75">
        <Link to={'/'}> <i className='fa-solid fa-arrow-left me-1'></i>Back to Home</Link>
        <div className='card shadow p-5' style={{ backgroundImage:`url("https://wallpaperset.com/w/full/7/5/a/545589.jpg")`}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              { insideRegister? <img className='w-75' src={studentregister} alt="" />:<img className='w-75' src={studentlogin} alt="" />}
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                {insideRegister? <h1 className='fw-bolder text-danger-emphasis mt-2'>Student register</h1>:
                <h1 className='fw-bolder text-danger-emphasis mt-2'>student login</h1>}
                <h5 className='fw-bolder mt-2 pb-3 text-dark'>
                  {insideRegister ? 'Sign up to your account' : 'Sign in to your account'}
                </h5>
                <Form className='w-100'>
                  {insideRegister && (
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Enter Register Number" />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control type="email" placeholder="Enter email"  />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"  />
                  </Form.Group>
                  {
                    insideRegister ?
                      <div>
                        <button className='btn btn-light mb-2'>Register</button>
                        <p>Already have an account? Click here to <Link to={'/student-login'}>Login</Link></p>
                      </div> :
                      <div>
                        <Link to={'/studenthome'}><button  className='btn btn-light mb-2'>Login </button></Link>
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
    </>
  )
}

export default StudentAut