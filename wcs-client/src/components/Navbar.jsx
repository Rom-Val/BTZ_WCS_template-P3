import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GrUserAdmin } from 'react-icons/gr';
import { SlUser } from 'react-icons/sl';
import inovin_logo from '../assets/logo_inovin_blanc.png'
import '../styles/Navbar.css';

const Navbar = () => {

    const { pathname } = useLocation();
    const splitLocation = pathname.split('/');

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <NavLink to="/"><img src={inovin_logo} alt='logo inovin' /></NavLink>
            </div>
            <NavLink to='/' className={splitLocation[1] === "" ? "active" : ""}>Accueil</NavLink>
            <div className='nav-dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <span>Ateliers <IoMdArrowDropdown /> </span>
                {dropdownOpen && (
                    <div className='nav-ateliers'>
                    <NavLink to='/atelier-creation' className={splitLocation[1] === "atelier-creation" ? "active" : ""}>Création</NavLink>
                    <NavLink to='/atelier-degustation' className={splitLocation[1] === "atelier-degustation" ? "active" : ""}>Dégustation</NavLink>
                </div>
                )}
            </div>
            <NavLink to='/notre-histoire' className={splitLocation[1] === "notre-histoire" ? "active" : ""}>Notre Histoire</NavLink>
            <NavLink to='/inscription' className={splitLocation[1] === "inscription" ? "active" : ""}>S'inscrire</NavLink>
            <NavLink to="/profil" className={splitLocation[1] === "profil" ? "active" : ""}><SlUser className='profil-icon' /></NavLink>
            <NavLink to='/admin/' className={splitLocation[1] === "admin" ? "active" : ""}><GrUserAdmin className='admin-icon'/></NavLink>
        </div>
    )
}

export default Navbar;