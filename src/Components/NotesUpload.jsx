import React from 'react'
import notesicon from '../Pages/Admin/images/notesicon.jpg'

function NotesUpload() {
  return (
    <>
    <label>
        <input type="file" style={{display:'none'}} />
        <img className='w-25' src={notesicon} alt="upload notes" />
        </label>
    </>
  )
}

export default NotesUpload