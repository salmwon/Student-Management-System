import React from 'react'
import HeaderStud from '../../Components/HeaderStud'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import studenthome from './images/studenthome.png'
function StudentHome() {
  return (
    <>
    <HeaderStud/>

    <div className='rounded' style={{ width: "100%", height: "100vh" }} >
        <div style={{ height: "100%" }} className='container '>
          <div className="row align-items-center" style={{ height: "100%" }}>
            <div className="col-lg-5">
              <h1 style={{ fontSize: "70px" }} className='fw-bolder text-danger-emphasis'><i style={{ height: '82px' }} class="fa-solid fa-graduation-cap fa-bounce"></i>Student management system</h1>
              <p>Student management systems make faculty jobs more accessible by giving them an easy place to find and sort information.
                This system allows teachers and student managers to follow with their student engagement. The idea is to create a scenario
                that makes the lives of administration and teachers easier.</p>
              <Link className='btn btn-warning'>Know More<i className='fa-solid fa-arrow-right ms-2'></i></Link>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <img className='imgfluid w-100' src={studenthome} alt="" />
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default StudentHome