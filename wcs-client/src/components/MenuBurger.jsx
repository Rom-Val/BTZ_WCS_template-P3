import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { SlUser } from 'react-icons/sl'
import inovin_logo from '../assets/logo_inovin_blanc.png'
import '../styles/MenuBurger.css';

const MenuBurger = () => {

    const { pathname } = useLocation();
    const splitLocation = pathname.split('/');

    const [isOpen, setIsOpen] = useState(false);
    const menuBurgerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuBurgerRef.current && !menuBurgerRef.current.contains(e.target))
            setIsOpen(false)
        }
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.addEventListener('mousedown', handleOutsideClick);
        }
    }, [])

    return (
        <div className='phone-navbar-container'>
            <div className='logo-container'>
                    <NavLink to="/"><img src={inovin_logo} alt='logo inovin' /></NavLink>
            </div>
            <div className='menu-icon-container'>
                <div className='menu-burger-container' ref={menuBurgerRef}>
                    <div className={isOpen === false ? 'menu-burger-btn closed' : 'menu-burger-btn opened'} onClick={toggleMenu}>
                        <span className='menu-burger-bar bar1'></span>
                        <span className='menu-burger-bar bar2'></span>
                        <span className='menu-burger-bar bar3'></span>
                    </div>
                    {isOpen && (
                        <ul className='menu-burger-list'>
                            <NavLink to='/' className={splitLocation[1] === "" ? "active" : ""}><li>Accueil</li></NavLink>
                            <NavLink to='/atelier-creation' className={splitLocation[1] === "atelier-creation" ? "active" : ""}><li>Atelier Création</li></NavLink>
                            <NavLink to='/atelier-degustation' className={splitLocation[1] === "atelier-degustation" ? "active" : ""}><li>Atelier Dégustation</li></NavLink>
                            <NavLink to='/notre-histoire' className={splitLocation[1] === "notre-histoire" ? "active" : ""}><li>Notre Histoire</li></NavLink>
                            <NavLink to='/inscription' className={splitLocation[1] === "inscription" ? "active" : ""}><li>S'inscrire</li></NavLink>
                            <NavLink to='/'><li>Se déconnecter</li></NavLink>
                        </ul>
                    )}
                </div>
                <NavLink to="/profil" className={splitLocation[1] === "profil" ? "active" : ""}><SlUser className='profil-icon' /></NavLink>
            </div>
        </div>
    )
}

export default MenuBurger;