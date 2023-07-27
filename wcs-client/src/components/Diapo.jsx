import { useState } from 'react';
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io'
import Lozere from '../assets/photo_vin_0.jpg'
import Vin_1 from '../assets/photo_vin_1.jpg'
import Vin_2 from '../assets/photo_vin_2.jpg'
import '../styles/Diapo.css';

const Diapo = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {image: Lozere, texte: 'Lozère, France', index: 0},
        {image: Vin_1, index: 1},
        {image: Vin_2, index: 2},
    ];

    return (
        <div className='home-page-header'>

            {slides.map(slide => (
                <div key={slide.index} className={`diapo${slide.index === currentSlide ? ' active' : ''}`}>
                    { currentSlide !== 0 && (
                        <IoMdArrowDropleftCircle className='prev-slide-arrow' onClick={() => setCurrentSlide(slide.index - 1)}/>
                    )}
                    
                    <div className='slide-content'>
                        <div className='slide-img-container'>
                            <img src={slide.image} alt={slide.texte}/>
                        </div>
                        <p className='slide-texte'>{slide.texte}</p>
                    </div>
                    {currentSlide !== slides.length - 1 && (
                       <IoMdArrowDroprightCircle className='next-slide-arrow' onClick={() => setCurrentSlide(slide.index + 1)} /> 
                    )}
                    
                </div>
            ))}
        </div>

    )
}

export default Diapo;