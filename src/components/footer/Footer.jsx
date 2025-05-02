import './footer.css';
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineDiscord } from "react-icons/ai";
import logo from '../../assets/images/chaicode-white.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">

                <div className="footer-top">
                    <div className="column column1">
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div className="text"><p>Home for programmers</p></div>
                        <div className="icons">
                            <div className="youtube"><FiYoutube fontSize={25}/> </div>
                            <div className="insta"><FaInstagram  fontSize={25}/></div>
                            <div className="linkedin">< CiLinkedin fontSize={25}/></div>
                            <div className="twitter"><FiTwitter fontSize={25}/></div>
                            <div className="github"><FaGithub fontSize={25}/></div>
                            <div className="discord">< AiOutlineDiscord fontSize={25}/></div>
                        </div>
                        <div className="copyright-text"><p>© 2025 ChaiCode. All rights reserved.</p></div>
                    </div>
                    <div className="column">
                        <h2>Products</h2>
                        <ul>
                            <li>Courses</li>
                            <li>Cohort</li>
                            <li>Coding Hero</li>
                            <li>Free API</li>
                            <li>Masterji</li>
                            </ul>
                    </div>

                    <div className="column">
                        <h2>Resources</h2>
                        <ul>
                            <li>Docs</li>
                            <li>Privacy Policy</li>
                            <li>Terms of service</li>
                            <li>Pricing Policy</li>
                            <li>Refund Policy</li>
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