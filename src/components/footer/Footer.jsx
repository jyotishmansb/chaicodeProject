import './footer.css';
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineDiscord } from "react-icons/ai";
import logo from '../../assets/images/chaicode-white.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">

                <div className="footer-top">
                    <div className="column column1">
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div className="text"><p>Home for programmers</p></div>
                        <div className="icons">
                            <div className="youtube"><a href="https://www.youtube.com/@chaiaurcode"></a>
                            <FiYoutube fontSize={25}/> </div>
                            <div className="insta"><FaInstagram  fontSize={25}/></div>
                            <div className="linkedin"><a href="https://www.linkedin.com/in/hiteshchoudhary/?originalSubdomain=in"></a>< CiLinkedin fontSize={25}/></div>
                            <div className="twitter"><a href="https://x.com/Hiteshdotcom"></a><FiTwitter fontSize={25}/></div>
                            <div className="github"><a href="https://github.com/hiteshchoudhary"></a><FaGithub fontSize={25}/></div>
                            <div className="discord"><a href="https://discord.com/invite/WDrH3zuWFb"></a>< AiOutlineDiscord fontSize={25}/></div>
                        </div>
                        <div className="copyright-text"><p>© 2025 ChaiCode. All rights reserved.</p></div>
                    </div>
                    <div className="column">
                        <h2>Products</h2>
                        <ul>
                            <li><a href="https://courses.chaicode.com/learn">Courses</a> </li>
                            <li><a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">Cohort</a> </li>
                            <li>Coding Hero</li>
                            <li>Free API</li>
                            <li>Masterji</li>
                            </ul>
                    </div>

                    <div className="column">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="https://docs.chaicode.com/">Docs</a> </li>
                            <li ><Link to='/privacy'> Privacy Policy</Link></li>
                            <li><Link to='/tos'> Terms of service</Link></li>
                            <li><Link to='/pricing'>Pricing Policy</Link> </li>
                            <li> <Link to='/refund'>Refund Policy</Link> </li>
                            </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>CHAICODE</p>
                </div>

            </div>





        </footer>




    )
}

export default Footer