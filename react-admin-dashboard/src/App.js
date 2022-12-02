import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewRagister from './news/newragister/NewRagister'
import MoniToring from './pages/monitoring/MoniToring'
import Orders from './news/order/Orders'
import Staff from './information/staff/Staff'
import Client from './information/client/Client'
import Material from './information/material/Material'
import Item from './information/item/Item'
import Process from './information/process/Process'
import Machine from './information/machine/Machine'
import Info from './information/info/Info'



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />


        <Routes>
          <Route path='/Staff' element={<Staff />} />
          <Route path='/info/Client' element={<Client />} />
          <Route path='/info/Material' element={<Material />} />
          <Route path='/info/Item' element={<Item />} />
          <Route path='/info/Process' element={<Process />} />
          <Route path='/info/Machine' element={<Machine />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/monitoring" element={<MoniToring />} />
          <Route path="/NewR" element={<NewRagister />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/info" element={<Info />} />
        </Routes>


      </div>
    </Router >
  )
}


export default App;
//<div className='others'>other pages</div> */




