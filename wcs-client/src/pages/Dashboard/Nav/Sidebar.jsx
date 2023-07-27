import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import inovin_logo from '../../../assets/logo_inovin_noir.png';
import { BiSolidDashboard, BiEuro } from 'react-icons/bi';
import { FaUsers, FaWineBottle } from 'react-icons/fa';
import "../../../styles/Sidebar.css"

export const Sidebar = () => {

  const { pathname } = useLocation();
  const splitLocation = pathname.split('/');

  return(
    <div className='sidebar-container'>
        <div className='logo-container'>
        <NavLink to="/"><img src={inovin_logo} alt='logo inovin' /></NavLink>
      </div>
      <div className='navlinks'>
        <NavLink to='/admin/' className={splitLocation[1] === "dashboard" ? "active" : ""}><BiSolidDashboard className='icon Dashboard-icon'/>Dashboard</NavLink>
        <NavLink to='/admin/userslist' className={splitLocation[1] === "userslist" ? "active" : ""}><FaUsers className='icon UsersList-icon'/>Utilisateurs</NavLink>
        <NavLink to='/admin/bottlecepage' className={splitLocation[1] === "bottlecepage" ? "active" : ""}><FaWineBottle className='icon BottleCepage-icon'/>Cepage</NavLink>
        <NavLink to="/admin/bottlesale" className={splitLocation[1] === "bottlesale" ? "active" : ""}><BiEuro className='icon BottleSale' />Ventes</NavLink>
        </div>
    </div>
  )
}


