import React from 'react'
import adminicon from '../assets/Images/adminicon.png'
import userimage from '../assets/Images/userimage.png'
import { Link } from 'react-router-dom'
function StartPage() {
    return (
        
            <div className='row mt-5 container-fluid'>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 border rounded" style={{ width: '100vh', backgroundImage:`url("https://images.saasworthy.com/blog_latest/wp-content/uploads/2022/10/school.jpg")`,backgroundSize:'cover' }}>
                    <div className="row mt-5">
                        <div className="col-6  mt-5 mb-5">
                            <Link to={'/admin-login'}><img className='w-100' src={adminicon} alt="" /></Link>
                            <h4 className='text-center'>Admin Login</h4>
                        </div>
                        <div className="col-6  mt-5 mb-5">
                            <Link to={'/student-login'}><img className='w-100' src={userimage} alt="" /></Link>
                            <h4 className='text-center'>students login</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
       
    )
}

export default StartPage