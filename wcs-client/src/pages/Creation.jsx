import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import Footer from '../components/Footer';
import '../styles/Creation.css';


const Creation = () => {
    return (
        <div className='creation-page'>
            <Navbar />
            <MenuBurger />
            <h1>Création de votre vin</h1>
            <div className='creation-header'>
                <h2><span>Guide</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam nam voluptatibus consequatur a repellat, quibusdam quia non voluptate? Doloribus sed sunt animi cum quam architecto corporis sequi eligendi quo.</p>
            </div>
            <div className='creation-container'>
                <h2><span>Dosage</span></h2>
                <h3>Bouteille par cépage</h3>
                <ul className='bouteilles-list'>
                    <li>Bouteille 1 <span>4</span></li>
                    <li>Bouteille 2 <span>6</span></li>
                    <li>Bouteille 3 <span>8</span></li>
                </ul>
            </div>
            <div className='creation-solution'>
                <h2><span>Solution d'assemblage</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam nam voluptatibus consequatur a repellat, quibusdam quia non voluptate? Doloribus sed sunt animi cum quam architecto corporis sequi eligendi quo.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Creation;