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
                <div className="tweet-container">
                    <Tweet className='tweet-box' id="1905574126112153860" />
                    <Tweet className='tweet-box' id="1910405500635664554" />
                    <Tweet className='tweet-box' id="1910275278686822749" />

                </div>
                <button className='cta-btn-join'>
                    <a href="https://courses.chaicode.com/learn/view-all?show=batch&type=17">
                    Join Cohorts Live Classes
                    </a>
                </button>

            </div>
        </section>


    )
}

export default TweetEmbed