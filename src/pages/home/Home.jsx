import Navbar from "../../components/navbar/Navbar"
import Hero from '../../components/hero/Hero';
import YtVideo from '../../components/ytVideo/YtVideo';
import Tweet from '../../components/tweet/TweetEmbed';
import Cohorts from '../../components/cohorts/Cohorts';
import Testimonial from '../../components/testimonials/Testimonial';
import Udemy from '../../components/udemy/Udemy';
import Benefits from '../../components/benefits/Benefits';
import Why from '../../components/why/Why';
import Topics from '../../components/topics/Topics';
import Community from '../../components/community/Community';
import FreeApi from '../../components/freeApi/FreeApi';
import AppDownload from '../../components/appDownload/AppDownload';
import Footer from '../../components/footer/Footer';
import Company from '../../components/company/Company';
import Collaborate from "../../components/collaborate/Collaborate";


const Home = () => {
    return (
        <div className="home">

            <Hero />
            <YtVideo />
            <div className="divider"></div>
            <Tweet />
            <div className="divider"></div>
            <Company />
            <div className="divider"></div>
            <Cohorts />
            <div className="divider"></div>
            <Testimonial />
            <div className="divider"></div>
            <Udemy />
            <div className="divider"></div>
            <Benefits />
            <div className="divider"></div>

            <Why />
            <div className="divider"></div>
            <Topics />
            <div className="divider"></div>
            <Community />
            <div className="divider"></div>
            <FreeApi />
            <div className="divider"></div>

            <AppDownload />
            <div className="divider"></div>
            <Collaborate />
            <div className="divider"></div>










        </div>
    )
}

export default Home