import Navbar from '../components/Navbar';  
import MenuBurger from '../components/MenuBurger';    
import Footer from '../components/Footer';
import Programmes from '../components/Programmes';
import '../styles/NotreHistoire.css'
import inovin_logo from '../assets/logo_inovin_noir.png';

const NotreHistoire = () => {
    return (
        <div className='histoire-page'>
            <Navbar />
            <MenuBurger />

            <h1>Notre histoire</h1>
            <div className='dashboard-img'>
                <img src={inovin_logo} alt='logo inovin' />
                </div>
            <div className='histoire-container'>
                <h2><span>Notre concept</span></h2>
                <p>Imaginez :
                une terre où la culture du vin est presque inconnue, où la nature environnante est riche de terroir.
                C'est dans ce décor que j'ai décidé de créer <span className='inovin'>INOVIN</span></p>
                <p>Au départ, l'idée semble folle!
                J'ai développé une véritable passion pour le vin et j'ai décidé de la partager à travers des ateliers.
                C'est une première en Lozère, dont les valeurs communes sont: partage, convivialité, passion, transmission.</p>
                <p><span className='inovin'>INOVIN</span> vise à etre la référence en matière d'atelier.
                L'objectif, rendre fiers nos clients de produire le vin qui reflète leur personnalité.
                Enthousiaste et motivé, Inovin décide de s'associer avec des partenaires locaux et régionaux pour promouvoir le terroir Lozérien, mettant en avant ses richesses naturelles et en faisant valoir les avantages de nos ateliers personnalisé dans une région inattendue.</p> 
                <p>Avec <span className='inovin'>INOVIN</span> en Lozère, les participants découvrent une approche de la vinification et de la création du vin différente de celles traditionnellement associées aux grandes régions viticoles de France.
                <span className='inovin'>INOVIN</span> tente a prouver que la création d'un bon vin ne nécessite pas forcément de surface cultivée et l'utilisation de techniques sophistiquées.</p> 
                <p>Voilà l'histoire d'<span className='inovin'>INOVIN</span> en Lozère - une entreprise audacieuse, passionnée et innovante, qui s'impose dans un environnement atypique, en proposant une expérience inoubliable</p>
                
                <h2><span>Nos programmes</span></h2>
                <Programmes />
            </div>
            <Footer />
        </div>
    )
}

export default NotreHistoire;