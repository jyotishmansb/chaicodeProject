import './hero.css';
import { FaArrowRight } from "react-icons/fa6";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";

const Hero = () => {
    return (
        <section className='section-hero'>

            <div className="hero-container">

                <div className="trust-box">
                    <div className="trust-text">Trusted by 1.5M Code Learners</div>

                </div>
                <h1 className="header-text">Consistency & Community</h1>
                <h2 className="subtext">Unmatched Learning Experience for coding courses</h2>
                <p className="desc">Content is everywhere, but we provide a learning experience that is unmatched <br /> bounties, peer learning, code reviews,
                    virtual hostel, alumni network, doubt sessions, and group projects</p>


                <div className="feature-box">
                    <div className="feature">< GrGroup className='icon' /> <p>Peer Learning</p>    </div>
                    <div className="feature"> <FaCode className='icon' /> <p>Code Reviews</p></div>
                    <div className="feature"><MdOutlineVideoCameraFront fontSize={24} className='icon' /><p>Virtual Hostel</p></div>
                    <div className="feature"><FaRegComments className='icon' /><p>Doubt Sessions</p></div>
                    <div className="feature"><RiMoneyRupeeCircleLine className='icon' /><p>Bounties</p></div>
                </div>



                    <a  href="https://courses.chaicode.com/learn/view-all?show=batch&type=17" className="cta-btn">

                        <div class="live-blinker"></div>  Check all Live Cohorts < FaArrowRight className='arrow' />




                    </a>
             


            </div>

            <div className="section-blend"></div>

        </section>
    )
}

export default Hero