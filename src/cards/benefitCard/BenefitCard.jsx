import './benefitCard.css';
import image from '../../assets/images/workshop.jpg'


const BenefitCard = () => {
    return (
        <div className="benefit-box">
           
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="benefit-text">
                    <div className="heading-text"><p>Taught by Professionals</p></div>
                    <div className="subtext"><p>Our cohorts are being taught by top industry experts and educators</p></div>
                </div>
            

        

        </div>


    )
}

export default BenefitCard