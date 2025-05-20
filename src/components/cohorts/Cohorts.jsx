
import CohortsCard from '../../cards/cohortsCard/CohortsCard'
import './cohort.css';
import { cohorts } from '../../data/cohortData'

const Cohorts = () => {
    return (
        <section id='cohorts' className='section-cohorts'>
            <div className="cohorts-section-container">
                <div className="section-heading">
                    <h1>Cohorts</h1>
                    <p>Live training Classes</p>
                </div>
                <div className="cohorts-wrapper">
                    {
                        cohorts.map(({ id, youtubeUrl, title, desc, date, duration, price, oldPrice,link }) => {
                            return <CohortsCard key={id}
                                title={title} youtubeUrl={youtubeUrl} desc={desc} date={date} duration={duration} price={price} oldPrice={oldPrice} link={link}/>
                        })

                    }
                </div>
            </div>
        </section>




    )
}

export default Cohorts