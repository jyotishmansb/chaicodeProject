import './why.css'
import hitesh from '../../assets/images/hitesh.png'

const Why = () => {
    return (
        <section className='section-why'>
            <div className="why-container">
                <div className="section-heading">
                    <h1>But Why ChaiCode?</h1>
                    <p>Chai code exist because we love tech and teaching</p>
                </div>

                <div className="why-wrapper">
                    <div className="left">
                        <div className="box">
                            <h1>Comprehensive Cirricullum</h1>
                            <p>Master key concepts and hands on skill with clarity and confidence</p>
                            <p>Learn what truly matters , the right way through practical and easy to understand</p>
                        </div>

                        <div className="box">
                            <h1>You Finish It</h1>
                            <p>Master key concepts and hands on skill with clarity and confidence</p>
                            <p>Learn what truly matters , the right way through practical and easy to understand</p>
                        </div>


                        <div className="box">
                            <h1>Industry Guests</h1>
                            <p>Master key concepts and hands on skill with clarity and confidence</p>
                            <p>Learn what truly matters , the right way through practical and easy to understand</p>
                        </div>

                    </div>

                    <div className="center"> 
                        <div className="image"><img src={hitesh} alt="" /></div>
                        <div className="name">
                            <h1>Hitesh Choudhury</h1>
                            <p>Retired from corporate and full timr youtuber. Founder of LCO(aquired)x CTO</p>
                        </div>
                        <div className="approach">
                            <h1>Approach</h1>
                            <p>Retired from corporate and full timr youtuber. Founder of LCO(aquired)x CTO</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="box">
                            <h1>Comprehensive Cirricullum</h1>
                            <p>Master key concepts and hands on skill with clarity and confidence</p>
                            <p>Learn what truly matters , the right way through practical and easy to understand</p>
                        </div>

                        <div className="box">
                            <h1>You Finish It</h1>
                            <p>Master key concepts and hands on skill with clarity and confidence</p>
                            <p>Learn what truly matters , the right way through practical and easy to understand</p>
                        </div>


                        <div className="box">
                            <h1>Industry Guests</h1>
                            <p>Master key concepts and hands on skill with clarity and confidence</p>
                            <p>Learn what truly matters , the right way through practical and easy to understand</p>
                        </div>
                    </div>

 
                </div>

                <button className='cta-btn-join'>
                    Join Cohorts Live Classes
                </button>

            </div>



        </section>



    )
}

export default Why