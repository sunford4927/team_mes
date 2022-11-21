import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Home from './pages/home/Home'
import { HiMenuAlt3 } from "react-icons/hi"
import UserList from './pages/userList/UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewRagister from './news/newragister/NewRagister'




function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <section className="flex gap-6">
          <div className="bg-[#0e0e0e] min-h-screen w-72 text-gray-100">
            <div className="py-3 flex justify-end">
              <HiMenuAlt3 size={26} className="cursor-pointer" />
            </div>
          </div>
        </section>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/NewR" element={<NewRagister />} />


        </Routes>
      </div>
    </Router>
  )
}


export default App
//<div className='others'>other pages</div> */ 




