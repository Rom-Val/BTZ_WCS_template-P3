import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {Sidebar} from './Nav';
import UserList from './pages/UserList';
import BottleCepage from './pages/BottleCepage';
import BottleSale from './pages/BottleSale';
import '../../styles/Sidebar.css';
import Dashboard from './pages/Dashboard';

function AdminDashboard() {
  return (
    <div className='adminApp'>

          <Sidebar/>
        <main className='main-container'>

            <Routes>
               <Route path='/' element={<Dashboard />} />
               <Route path='/userslist' element={<UserList />} />
               <Route path='/bottlecepage' element={<BottleCepage />} />
               <Route path='/bottlesale' element={<BottleSale />} />
            </Routes>
         
        </main>

    </div>
  )
}

export default AdminDashboard