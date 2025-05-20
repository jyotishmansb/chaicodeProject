import './why.css'
import hitesh from '../../assets/images/hitesh.png';
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineDiscord } from "react-icons/ai";

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

                        <div className="icons">
                            <div className="youtube"><a href="https://www.youtube.com/@chaiaurcode"><FiYoutube fontSize={25}/> </a></div>
                            <div className="linkedin"><a href="https://www.linkedin.com/in/hiteshchoudhary/?originalSubdomain=in">< CiLinkedin fontSize={25}/></a></div>
                            <div className="twitter"><a href="https://x.com/Hiteshdotcom"><FiTwitter fontSize={25}/></a></div>
                            <div className="github"><a href="https://github.com/hiteshchoudhary"><FaGithub fontSize={25}/></a></div>
                           
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

                  <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17" className='cta-btn-join'>Join Cohorts Live Classes </a>  
               

            </div>



        </section>



    )
}

export default Why