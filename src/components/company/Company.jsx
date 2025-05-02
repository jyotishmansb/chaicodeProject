import './company.css';
import google from '../../assets/images/googleLogo.png'
import tcs from '../../assets/images/tcs.png';
import infy from '../../assets/images/infy.png'
const Company = () => {
  return (
   <section className='section-company'>
    <div className="company-container">
        <div className="section-heading">
            <p>Our Students are not only working in Big tech companies  but are now founders of funded startups and product creators</p>
        </div>
<div className="company-wrapper">
    <div className="company-logo">
        <img src={google} alt="" />
    </div>

    <div className="company-logo">
        <img src={tcs} alt="" />
    </div>
    <div className="company-logo">
        <img src={infy} alt="" />
    </div>

</div>


    </div>
   </section>





  )
}

export default Company