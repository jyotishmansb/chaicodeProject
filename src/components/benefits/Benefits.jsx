import BenefitCard from '../../cards/benefitCard/BenefitCard'
import './benefits.css'
import image from '../../assets/images/workshop.jpg';
import {benefits} from '../../data/benefits'


const Benefits = () => {
    return (
        <section className='section-benefits'>
            <div className="section-heading">
                <h1>Key Benefits of Cohorts</h1>
                <p>Cohorts are best way to learn because you finish the course in a timely manner</p>
            </div>
            <div className="section-benefit-container">
                {
                    benefits.map(({id, title, desc, image}) => {
                        return <BenefitCard key={id} title={title} desc={desc} image={image} />
                    })


                }
               


            </div>

            <div className="almuni-network-box">
                <div className="image">
                    <img src={image} alt="" />

                </div>
                <div className="almuni-network-box-text">
                    <div className="almuni-title">
                        Alumni Network and job listings
                    </div>
                    <div className="almuni-para1">
                        The alumni Network that you always wished for in your college. We have a dedicated platform where students
                        get to know each other, do projects, make agencies and join Hackathons
                    </div>
                    <div className="almuni-para2">
                        Our HR team also post regular job updates
                        that you can apply directly whenever you are ready
                    </div>
                </div>

            </div>




        </section>



    )
}

export default Benefits