import { Link } from 'react-router-dom';
import '../styles/Programmes.css'

const Programmes = () => {
    return (
        <div className='programmes-container'>
            <div className='atelier-card'>
                <div className='card-details'>
                    <h3>Atelier création</h3>
                    <p className='atelier-price'>70,00 €</p>
                    <p className='atelier-description'>Découvrez l'art de la création vinicole en participant à notre atelier exclusif. Choisissez les cépages, cultivez les vignes et supervisez la production pour créer votre propre vin personnalisé. Guidés par nos experts passionnés, plongez dans l'univers viticole et créez une expérience œnologique unique qui vous accompagnera pendant des années.</p>
                </div>
                <Link to='/atelier-creation' className='atelier-card-btn'>En savoir plus</Link>
            </div>
            <div className='atelier-card'>
                <div className='card-details'>
                    <h3>Atelier dégustation</h3>
                    <p className='atelier-price'><span>50,00 €</span> 30, 00€</p>
                    <p className='atelier-description'>Éveillez vos sens lors de notre atelier de dégustation à l'aveugle. Découvrez quatre vins sélectionnés avec soin et testez vos capacités sensorielles en identifiant les arômes et les saveurs. Accompagnés de mets délicieux, chaque vin offre une expérience gastronomique raffinée. Plongez dans un voyage gustatif captivant, guidé par nos experts passionnés, et enrichissez votre palais avec des découvertes inattendues.</p>
                </div>
                <Link to='/atelier-degustation' className='atelier-card-btn'>En savoir plus</Link>
            </div>
        </div>
    )
}

export default Programmes;