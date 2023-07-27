import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger'; 
import Diapo from '../components/Diapo';     
import Programmes from '../components/Programmes'
import Footer from '../components/Footer';
import '../styles/Home.css';


const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <MenuBurger />
            <Diapo />
            <h1>INOVIN</h1>
            <p>Découvrez le trésor méconnu de la région Lozérienne en France. Ici, les Lozériens ont cultivé l'art du vin depuis des générations, leurs vignes s'étendant majestueusement le long des Gorges de la Daluis, surplombant le Tarn. 
                C'est dans ce cadre exceptionnel que s'épanouissent des raisins gorgés de jus et d'arômes uniques. </p>
            <p>Chez <span className='inovin'>INOVIN</span>, nous vous offrons l'opportunité de créer votre propre vin, en sélectionnant les cépages que vous souhaitez planter, en prenant soin des vignes et en supervisant la production. 
            Notre approche personnalisée de la viticulture vous promet une expérience inoubliable, qui vous accompagnera au fil des années.</p>
            <Programmes />
            <Footer />
        </div>
    )
}

export default Home;