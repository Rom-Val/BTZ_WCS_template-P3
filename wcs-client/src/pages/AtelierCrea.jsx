import { Link } from 'react-router-dom';
import WineCreation from '../assets/wine-creating.jpg'
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import Footer from '../components/Footer';
import '../styles/AtelierCrea.css'


const AtelierCrea = () => {
    return (
        <div className='atelier-crea-page'>
            <Navbar />
            <MenuBurger />
            <div className='atelier-crea-header'>
                <div className='atelier-crea-img'>
                    <img src={WineCreation} alt='Atelier Création' />
                </div>
                <h1>Atelier Création</h1> 
            </div>
            <p>Bienvenue à l'atelier <span className='inovin'>INOVIN</span>, où vous pourrez créer votre propre vin personnalisé.</p>

            <h1>Atelier Création</h1>

            <p>Atelier <span className='inovin'>INOVIN</span> pour créer votre propre vin personnalisé.</p>
            <p>Notre atelier <span className='inovin'>INOVIN</span> est une expérience unique en son genre : vous apprendrez à concevoir votre vin en sélectionnant les arômes et les saveurs qui correspondent à vos préférences.

            Une fois que vous aurez trouvé la composition parfaite, vous pourrez l'enregistrer dans notre base de données, afin de pouvoir la reproduire à tout moment. Vous aurez également l'occasion de présenter votre vin lors de notre concours. </p>

            <p>Nos ateliers <span className='inovin'>INOVIN</span> ont été conçus pour vous offrir une expérience inoubliable, mêlant découverte, apprentissage et convivialité. Vous serez guidé par des experts passionnés et compétents, qui vous dévoileront les secrets de la création vinicole. </p>

            <p>Que vous soyez une entreprise à la recherche d'une activité originale, un groupe de collègues souhaitant renforcer leurs liens, ou simplement un amateur passionné, notre atelier <span className='inovin'>INOVIN</span> est adapté à tous. </p>

            <p> Alors, êtes-vous prêts à donner vie à votre propre vin ? N'hésitez pas à nous contacter pour en savoir davantage sur notre offre <span className='inovin'>INOVIN</span> ! </p>

            <p> Les ateliers se déroulent en groupes de 5 à 10 personnes, et nous vous contacterons après votre réservation pour convenir d'une date. </p>

            <p>Nous avons hâte de vous accueillir !</p>

            <p>À très bientôt !</p>

            <h2><span>Programme</span></h2>
            <ol className='programme-atelier'>
                <li>Accueil des participants</li>
                <li>
                    45 minutes : présentation et dégustation des quatre mono-cépages soigneusement sélectionnés par nos experts en vin, dans le but de comprendre les différences de goût, d'arôme et de couleur pour chaque variété de raisin
                </li>
                <li>
                    45 minutes : atelier d'assemblage de vin personnalisé, où vous pouvez mélanger les cépages selon vos préférences. Vous serez assisté tout au long du processus par nos experts.
                </li>
                <li>
                    15 minutes : étape finale du processus de fabrication du vin: le bouchage et le scellage de la bouteille que vous pourrez emporter avec vous en tant que souvenir unique de votre expérience.
                </li>
                <li>
                    15 minutes : pour finir, un moment d'échange et de partage où vous serez invités à expliquer votre approche de création de votre assemblage, un moment où vous recevrez aussi la fiche technique de votre vin ainsi que l'enregistrement de votre recette dans notre base de données. 
                </li>
            </ol>
            <p>
                Nous nous engageons à vous offrir une expérience inoubliable, enrichissante et divertissante lors de cet atelier de deux heures "Crée ton vin <span className='inovin'>INOVIN</span>". Nous vous invitons à vous inscrire dès maintenant pour vivre ce moment unique dans le monde du vin.
            </p>
            <Link to="/inscription" className='inscription-btn'>S'inscrire</Link>
            <Footer />
        </div>
    )
}

export default AtelierCrea;