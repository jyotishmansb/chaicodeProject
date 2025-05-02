import Slider from '../../cards/slider/Slider';
import UdemyCard from '../../cards/udemyCard/UdemyCard';
import './udemy.css';


const Udemy = () => {
    return (
        <section className='section-udemy'>
            <div className="udemy-heading section-heading">
                <h1>Udemy</h1>
                <p>Not only in India, we are global leaders in tech education </p>
            </div>

            <div className="udemy-container">
           <UdemyCard/>
            

            </div>

        </section>



    )
}

export default Udemy