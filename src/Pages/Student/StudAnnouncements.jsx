import React from 'react'
import HeaderStud from '../../Components/HeaderStud'
import Alert from 'react-bootstrap/Alert';
import Footer from '../../Components/Footer';

function StudAnnouncements() {
    return (
        <>
            <HeaderStud />
            <div className='container'>
                <Alert variant="success">
                    <Alert.Heading>class test</Alert.Heading>
                    <p>
                        a class test of Module 5 will be conducted on monaday 23/05/2024 during 3rd period so study well
                    </p>
                    <hr />
                    <p className="mb-0">
                       <Date></Date>
                    </p>
                </Alert>
            </div>
            <Footer/>
        </>
    )
}

export default StudAnnouncements