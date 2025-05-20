import Slider from '../../cards/slider/Slider';
import UdemyCard from '../../cards/udemyCard/UdemyCard';
import './udemy.css';
import { udemycourse } from '../../data/udemy';
import { useState } from 'react';

  
const Udemy = () => {

    const [index, setIndex] = useState(0);
    const len = udemycourse.length;

    const next = () => {
        setIndex(i => (i < len - 1 ? i + 1 : 0));
    };

    const prev = () => {
        setIndex(i => (i > 0 ? i - 1 : len - 1));
    };


    return (
        <section id='udemy' className='section-udemy'>
            <div className="udemy-heading section-heading">
                <h1>Udemy</h1>
                <p>Not only in India, we are global leaders in tech education </p>
            </div>

            <div className="udemy-container">
                <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>

                    {udemycourse.map(({ id, title, desc, rating, udemyImg }) => {
                        return <UdemyCard key={id} title={title}
                            desc={desc} rating={rating} udemyImg={udemyImg} />

                    })}
                </div>
            </div>
            <div className="arrowBtn">
                <button className="arrowPrev" onClick={prev} disabled={index === 0}>
                    prev
                </button>
                <button className="arrowNext" onClick={next}  disabled={index === len - 1}>
                    next
                </button>
            </div>

            <div className="slider-indicators">

                {
                    udemycourse.map((_, id) => {
                        return <button
                            key={id}
                            className={`dot ${id === index ? 'active' : ''}`}
                        ></button>

                    })
                }
            </div>

        </section>



    )
}

export default Udemy