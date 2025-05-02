import UdemyCard from '../udemyCard/UdemyCard'
import './slider.css';
import { udemycourse } from '../../data/udemy';
import { useState } from 'react';


const Slider = () => {

    const [i, setIndex] = useState(0);
    const prevSlide = () => setIndex((i-1));
    const nextSlide = () => setIndex( (i + 1));

    return (
        <div className="slider">

            <div className="slider-container">
                <div className="prev" onClick={prevSlide}></div>
                <div className="next" onClick={nextSlide}></div>
               
                    {
                        udemycourse.map((course, i) => {
                            return <UdemyCard key={course.id} course={course} />

                        })}

            </div>
        </div>



    )
}

export default Slider