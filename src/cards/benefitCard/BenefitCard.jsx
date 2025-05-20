import './benefitCard.css';
import image from '../../assets/images/workshop.jpg'


const BenefitCard = ({ title, desc, image}) => {
    return (
        <div className="benefit-box">
           
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="benefit-text">
                    <div className="heading-text"><p>{title}</p></div>
                    <div className="subtext"><p>{desc}</p></div>
                </div>
            

        

        </div>


    )
}

export default BenefitCard