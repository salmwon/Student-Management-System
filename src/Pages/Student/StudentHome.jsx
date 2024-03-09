import React from 'react'
import HeaderStud from '../../Components/HeaderStud'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import studenthome from './images/studenthome.png'
import 'animate.css'
import leavemanage from './images/leavemanage.png'
import notes from './images/notes.png'
import announce from './images/announce.png'

function StudentHome() {
  document.documentElement.style.setProperty('--animate-duration', '1.5s');
  return (
    <>
    <HeaderStud/>

    <div  style={{backgroundImage:`url("https://img.freepik.com/premium-photo/modern-defocused-gradient-abstract-background_959985-157.jpg?size=626&ext=jpg&ga=GA1.1.1091484899.1695914088&semt=ais")`,backgroundSize:'cover' }} >
        <div  className='container'>
          <div className="row align-items-center mt-5 mb-5" >
            <div className="col-lg-5 animate__animated animate__backInLeft mb-5">
              <h1 style={{ fontSize: "70px" }} className='fw-bolder'><i style={{ height: '82px' }} class="fa-solid fa-graduation-cap fa-bounce"></i>Student management system</h1>
              <p>Student management systems make faculty jobs more accessible by giving them an easy place to find and sort information.
                This system allows teachers and student managers to follow with their student engagement. The idea is to create a scenario
                that makes the lives of administration and teachers easier.</p>
              <Link className='btn btn-warning'>Know More<i className='fa-solid fa-arrow-right ms-2'></i></Link>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5 animate__animated animate__backInRight">
              <img className='imgfluid w-100' src={studenthome} alt="" />
            </div>
          </div>
          <div className='row align-items-center mt-5'>
            <div className='col-lg-6 animate__animated animate__backInLeft animate__delay-2s'>
              <img src={leavemanage} alt="" />
            </div>
            <div className='col-lg-6 animate__animated animate__backInRight animate__delay-2s'>
              <ul>
              <h3>Leave Management</h3>
                <li>Easily Apply For Leave</li>
                <li>Apply for Leave and Submit necessary Documents on a single Click</li>
              </ul>
            </div>
          </div>
          <div className='row align-items-center mt-5'>
            <div className='col-lg-6 animate__animated animate__backInLeft animate__delay-2s'>
            <ul>
              <h3>Notes Upload/Download</h3>
                <li>Students can easily access Notes</li>
                <li>Uploading Notes and Downloading become easy</li>
              </ul>
            </div>
            <div className='col-lg-6 animate__animated animate__backInRight animate__delay-2s'>
              <img className='w-75' src={notes} alt="" />
            </div>
          </div>
          <div className='row align-items-center mt-5'>
            <div className='col-lg-6 animate__animated animate__backInLeft animate__delay-2s'>
              <img src={announce} alt="" />
            </div>
            <div className='col-lg-6 animate__animated animate__backInRight animate__delay-2s'>
              <ul>
              <h3>Announcements</h3>
                <li>Announcements became easy</li>
                <li>Admins can publish important Announcements easily and students can easily get to know about it </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default StudentHome