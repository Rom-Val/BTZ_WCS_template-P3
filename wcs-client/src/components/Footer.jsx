import { Link } from 'react-router-dom';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import inovin_logo from '../assets/logo_inovin_noir.png'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            
            <div className='newsletter-container'>
                <label htmlFor='newsletter-signup'>S'abonner à la newsletter</label>
                <input type='email' name='newsletter-email' id='newsletter-email' placeholder='Entrez votre adresse mail'/>
                <button type='submit'>S'abonner</button>
            </div>
            <div className='contact-info-container'>
                <div className='logo-footer'>
                    <img src={inovin_logo} alt='logo inovin' />
                </div>
                <p>01.02.03.04.05</p>
                <p>contact@inovin.fr</p>
                <div className='social-icons-container'>
                    <Link to="https://www.facebook.com/profile.php?id=100091922199451" target='_blank'><BsFacebook className='social-icon'/></Link>
                    <Link to="https://api.whatsapp.com/send?phone=750704812" target='_blank'><BsWhatsapp className='social-icon'/></Link>
                </div>
                
            </div>
            <div className='copyrights-container'>
                <p>&copy; 2023 Wilders</p>
            </div>
            
        </div>
    )
}

export default Footer;