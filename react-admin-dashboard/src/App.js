import Topbar from './components/topbar/Topbar'
import './App.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewRagister from './news/newragister/NewRagister'
import MoniToring from './pages/monitoring/MoniToring'
import Orders from './news/order/Orders'
import Client from './information/client/Client'
import Material from './information/material/Material'
import Item from './information/item/Item'
import Process from './information/process/Process'
import Machine from './information/machine/Machine'
import Login from './components/login/Login'
import Join from './components/join/Join'
import Report from './components/report/Report'
import Notice from './components/topbar/notice/Notice'
import Board from './components/topbar/notice/board/Board'
import NewCreate from './information/client/NewCreate'
import Staff from './information/staff/Staff'
import StaffCreate from './information/staff/StaffCreate'



console.log(window.location.href)
function App() {
  return (

    <Router>

      {window.location.href === "http://localhost:3000/" && "http://localhost:3000/join" ? '' : <Topbar />}
      <div className="body">
        <Routes>
          <Route path='/info/Client' element={<Client />} />
          <Route path='/info/Material' element={<Material />} />
          <Route path='/info/Item' element={<Item />} />
          <Route path='/info/Process' element={<Process />} />
          <Route path='/info/Machine' element={<Machine />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/monitoring" element={<MoniToring />} />
          <Route path="/NewR" element={<NewRagister />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/join" element={<Join />} />
          <Route path="/report" element={<Report />} />
          <Route path='/system/notice_board' element={<Board />} />
          <Route path='/customer/Create' element={<NewCreate />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/staff/create' element={<StaffCreate />} />
        </Routes>
      </div>
    </Router >
  )
}


export default App;
//<div className='others'>other pages</div> */




