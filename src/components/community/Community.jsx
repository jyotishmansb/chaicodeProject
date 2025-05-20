import './community.css'
import image from '../../assets/images/vc.png'

const Community = () => {
    return (
        <section className='section-coomunity'>
            <div className="community-container">


                <div className="community-wrapper">
                    <div className="community-left">
                        <div className="community-heading">
                            <h1>Community</h1>
                        </div>
                        <div className="community-text">

                            <p>Join Our <br />
                                Community<br></br> where Coder thrives</p>

                        </div>
                        <div className="discord-box">
                        <a href="https://discord.com/invite/WDrH3zuWFb" >
                          80,000 active coders in Discord
                        
                     </a>
                        </div>
                       

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