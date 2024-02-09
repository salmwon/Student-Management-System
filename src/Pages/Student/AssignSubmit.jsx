import React from 'react'
import HeaderStud from '../../Components/HeaderStud'
import Table from 'react-bootstrap/Table';
import Footer from '../../Components/Footer';

function AssignSubmit() {
  return (
    <>
    <HeaderStud/>
    <div>
        <h2 className='text-center'>Published Assignment</h2>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Topic</th>
          <th>Submission Date</th>
          <th>Question</th>
          <th>Submit Here(upload as pdf)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>React JS</td>
          <td>25/10/2024</td>
          <td>How is React different from React Native?</td>
          <td><input type="file" /></td>
        </tr>
      </tbody>
    </Table>
    </div>
    <Footer/>
    </>
  )
}

export default AssignSubmit