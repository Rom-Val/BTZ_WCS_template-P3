import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import Footer from '../components/Footer'
import { IoMdArrowDropright } from 'react-icons/io'
import '../styles/Profil.css';
import inovin_logo from '../assets/logo_inovin_noir.png';


const Profil = () => {
    return (
        <div className='profil-page'>
            <Navbar />
            <MenuBurger />
            <h1>Votre profil</h1>
            <div className='dashboard-img'>
                <img src={inovin_logo} alt='logo inovin' />
            </div>
            <div className='profil-header'>
                <h2><span>Picaut Axel</span></h2>
                <h3>33 ans</h3>
                <button>Modifier le profil</button>
            </div>
            
            <div className='options-container'>
                <div className='option-container'>
                    <Link to='/user/:userId/renseignement'><h2>Gérer les préférences</h2></Link> 
                    <Link to='/user/:userId/renseignement'><IoMdArrowDropright className='arrow-icon'/></Link>
                </div>

                <div className='option-container'>
                    <Link to='/creation'><h2>Mes créations</h2></Link>
                    <Link to='/creation'><IoMdArrowDropright className='arrow-icon'/></Link>
                </div>

                <div className='option-container'>
                    <h2>Ateliers</h2>
                    <ul className='signedup-ateliers-list'>
                        <li>Atelier Création 
                            <span>A venir : 18/08/2023</span>
                        </li>
                        <li>Atelier Dégustation 
                        <span>A venir : 29/07/2023</span>
                        </li>
                        <li>Atelier Dégustation 
                            <span>Passé : 21/05/2023</span>
                        </li>
                        <li className='more-ateliers-btn'>Voir plus...</li>
                    </ul>
                </div>
                <button className='logout-btn'>Se déconnecter</button>
            </div>
            <Footer />
        </div>
    )
}

export default Profil