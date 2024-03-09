import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import StartPage from './Pages/StartPage'
import AdminAut from './Pages/Admin/AdminAut'
import StudentAut from './Pages/Student/StudentAut'
import AdminHome from './Pages/Admin/AdminHome'
import StudentHome from './Pages/Student/StudentHome'
import LeaveManagement from './Pages/Admin/LeaveManagement'
import Notes from './Pages/Admin/Notes'
import Announcements from './Pages/Admin/Announcements'
import ApplyLeave from './Pages/Student/ApplyLeave'
import ViewNotes from './Pages/Student/ViewNotes'
import StudAnnouncements from './Pages/Student/StudAnnouncements'
import { tokenAuthenticationContext } from './Context API/Auth'
import { useContext } from 'react'





function App() {

const{isAuthorised, setIsAuthorised}=useContext(tokenAuthenticationContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/student-login' element={<StudentAut/>}/>
        <Route path='/student-register' element={<StudentAut insideRegister/>}/>
        <Route path='/admin-login' element={<AdminAut/>}/>
        <Route path='/adminhome' element={isAuthorised?<AdminHome/>:<AdminAut/>}/>
        <Route path='/studenthome' element={isAuthorised?<StudentHome/>:<StudentAut/>}/>
        <Route path='/leavemanagement' element={isAuthorised?<LeaveManagement/>:<AdminAut/>}/>
        <Route path='/notes' element={isAuthorised?<Notes/>:<AdminAut/>}/>
        <Route path='/announcements' element={isAuthorised?<Announcements/>:<AdminAut/>}/>
        <Route path='/applyleave' element={isAuthorised?<ApplyLeave/>:<StudentAut/>}/>
        <Route path='/viewnotes' element={isAuthorised?<ViewNotes/>:<StudentAut/>}/>
        <Route path='/studannouncements' element={isAuthorised?<StudAnnouncements/>:<StudentAut/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
 
      </Routes>
    </>
  )
}

export default App
