import { Link } from 'react-router-dom';
import WineTasting from '../assets/wine-tasting.jpg';
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';      
import Footer from '../components/Footer';
import '../styles/AtelierDegus.css'


const AtelierDegus = () => {
    return (
        <div className='atelier-degus-page'>
            <Navbar />
            <MenuBurger />
            <div className='atelier-degus-header'>
                <div className='atelier-degus-img'>
                    <img src={WineTasting} alt='Atelier degustation' />
                </div>
                <h1>Atelier Dégustation</h1> 
            </div>

            <p>Plongez dans l'univers fascinant de la dégustation de vin lors de notre atelier dégustation. </p>

            <p>Nos ateliers <span className='inovin'>INOVIN</span> ont été soigneusement conçus pour vous offrir une expérience inoubliable, combinant découverte, apprentissage et convivialité. Sous la guidance d'experts passionnés et compétents, vous plongerez dans les secrets de l'art de la dégustation. </p>

<p>Lors de cet atelier, vous aurez l'occasion de déguster quatre vins soigneusement sélectionnés, et ce, à l'aveugle. Cette expérience unique mettra à l'épreuve vos sens et vous permettra de développer votre palais en reconnaissant les arômes et les saveurs.

Pour compléter cette expérience sensorielle, chaque vin sera accompagné de mets savoureux, spécialement choisis pour mettre en valeur les caractéristiques de chaque vin. Cette harmonie entre le vin et les mets ajoutera une dimension gustative exceptionnelle à votre dégustation. </p>

<p>Que vous soyez une entreprise à la recherche d'un événement mémorable, un groupe de collègues désireux de renforcer leurs liens ou un amateur passionné en quête de connaissances, notre atelier <span className='inovin'>INOVIN</span> est adapté à tous.</p>

<p>Êtes-vous prêts à embarquer pour cette aventure gustative ? N'hésitez pas à nous contacter pour en savoir davantage sur notre offre <span className='inovin'>INOVIN</span> !

Nous avons hâte de partager avec vous notre passion pour la dégustation de vin.

À très bientôt !</p>
                
            <Link to="/inscription" className='inscription-btn'>S'inscrire</Link>
            
            <Footer />
        </div>
    )
}

export default AtelierDegus;