import './community.css'
import image from '../../assets/images/vc.png'
import { FaArrowRight } from "react-icons/fa6";

const Community = () => {
    return (
        <section className='section-coomunity'>
            <div className="community-container">


                <div className="community-wrapper">
                    <div className="community-left">

                        <h1 className="community-heading">Community</h1>
                        <p className="community-text">Join Our <br />
                            Community<br></br> where Coder thrives</p>


                        
                            <a href="https://discord.com/invite/WDrH3zuWFb"  className="discord-box">
                                80,000 active coders in Discord < FaArrowRight className='arrow' />

                            </a>
                        


                    </div>



                    <div className="community-right">
                        <div className="community-image">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>



            </div>



        </section>




    )
}

export default Community