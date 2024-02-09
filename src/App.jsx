import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import StartPage from './Pages/StartPage'
import AdminAut from './Pages/Admin/AdminAut'
import StudentAut from './Pages/Student/StudentAut'
import AdminHome from './Pages/Admin/AdminHome'
import StudentHome from './Pages/Student/StudentHome'
import LeaveManagement from './Pages/Admin/LeaveManagement'
import Notes from './Pages/Admin/Notes'
import Assignment from './Pages/Admin/Assignment'
import Announcements from './Pages/Admin/Announcements'
import ApplyLeave from './Pages/Student/ApplyLeave'
import ViewNotes from './Pages/Student/ViewNotes'
import AssignSubmit from './Pages/Student/AssignSubmit'
import StudAnnouncements from './Pages/Student/StudAnnouncements'





function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/student-login' element={<StudentAut/>}/>
        <Route path='/student-register' element={<StudentAut insideRegister/>}/>
        <Route path='/admin-login' element={<AdminAut/>}/>
        <Route path='/admin-register' element={<AdminAut insideRegister/>}/>
        <Route path='/admin-login' element={<AdminAut/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/studenthome' element={<StudentHome/>}/>
        <Route path='/leavemanagement' element={<LeaveManagement/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/assignment' element={<Assignment/>}/>
        <Route path='/announcements' element={<Announcements/>}/>
        
        <Route path='/applyleave' element={<ApplyLeave/>}/>
        <Route path='/viewnotes' element={<ViewNotes/>}/>
        <Route path='/subassign' element={<AssignSubmit/>}/>
        <Route path='/studannouncements' element={<StudAnnouncements/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
        {/* <Route path='/student' element={<StudentAut />} />
        <Route path='/admin' element={<AdminAut />} /> */}
      </Routes>
    </>
  )
}

export default App
