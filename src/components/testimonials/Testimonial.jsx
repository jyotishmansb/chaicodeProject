import TweetCard from '../../cards/tweetCard/TweetCard'
import './testimonial.css'
import { tweet } from '../../data/tweet';

const Testimonial = () => {
    return (
        <section id='reviews' className='section-testimonial'>
            <div className="testimonial-container">
                <div className="section-heading">
                    <h1>Our Students Feedback</h1>
                    <p>Explore the incredible advantage of joping our courses and enhancing your skills</p>
                </div>
                <div className="testimonial-wrapper">
                    {
                        tweet.map(({id , tweetId}) => {
                            return <TweetCard key={id} tweetId={tweetId} />
                        })

                    }

                </div>
                <button className='cta-btn-join'>
                <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">Join Cohorts Live Classes</a>    
                </button>
            </div>
        </section>

        // https://x.com/ajaypatel745/status/1902164049648894360
        // https://x.com/nileshhaldar98/status/1903057026202341688
        // https://x.com/HrRahman_/status/1892974024298299443
        // https://x.com/SinghSanket78/status/1900967005173543166
        // https://x.com/imaaryanpandey/status/1899207758282698862



    )
}

export default Testimonial