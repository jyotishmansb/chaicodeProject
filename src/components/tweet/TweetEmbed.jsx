import './tweet.css'
import { Tweet } from 'react-tweet';

const TweetEmbed = () => {
    return (
        <section className='section-tweet'>
            <div className="tweet-section-container">
                <div className="section-heading">
                    <h1>Tweet Love</h1>
                    <p>Love that we get from our community </p>

                </div>
                <div className="tweet-container-love">
                    <Tweet className='tweet-box' id="1905574126112153860" />
                    <Tweet className='tweet-box' id="1910405500635664554" />
                    <Tweet className='tweet-box' id="1910275278686822749" />

                </div>
               
                    <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17" className='cta-btn-join'>
                    Join Cohorts Live Classes
                    </a>
              

            </div>
        </section>


    )
}

export default TweetEmbed