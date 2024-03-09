import React from 'react'
import { Link } from 'react-router-dom'
import tea from '../assets/Images/tea.png'
import std from '../assets/Images/std.png'
import frontimg from '../assets/Images/frontimg.jpg'
function StartPage() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh', backgroundImage: `url("${frontimg}")`, backgroundSize: 'cover' }}>
                <div className="container w-75">
                    <div className='shadow p-5 rounded' style={{ backgroundImage: `url("${frontimg}")`, backgroundSize: 'cover' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 align-items-center">
                            <Link to={'/admin-login'}><img className='w-50' style={{marginLeft:'130px'}} src={tea} alt="" /></Link>
                                <h4 className='text-light mt-4' style={{marginLeft:'180px'}}>Admin Login</h4>
                            </div>
                            <div className="col-lg-6 align-items-center">
                            <Link to={'/student-login'}><img className='w-50 mb-4 mt-4' style={{marginLeft:'140px'}} src={std} alt="" /></Link>
                                <h4 className='text-light' style={{marginLeft:'160px'}}>students login</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default StartPage