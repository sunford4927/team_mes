import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewRagister from './news/newragister/NewRagister'
import MoniToring from './pages/monitoring/MoniToring'
import Orders from './news/order/Orders'



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/monitoring" element={<MoniToring />} />
          <Route path="/NewR" element={<NewRagister />} />
          <Route path="/order" element={<Orders />} />
        </Routes>






      </div>
    </Router >
  )
}


export default App;
//<div className='others'>other pages</div> */




