import ReactPlayer from "react-player";
import './cohortsCard.css';
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";

const CohortsCard = ({ youtubeUrl, title, desc, date, duration, price, oldPrice }) => {
    return (
        <div className="cohortsCard-container">

            <div className="react-player-wrapper">
                <ReactPlayer className="react-player"
                    url={youtubeUrl}


                    playing={false}
                    muted={false}
                    controls={false}
                    width="100%"
                    height="100%"
                    playsinline

                    config={{
                        youtube: {
                            playerVars: {
                                modestbranding: 1,
                                rel: 0
                            }
                        }
                    }}
                >

                </ReactPlayer>
            </div>
            <div className="cohortsCard-text">


                <div className="cohort-title"><h1>{title}</h1></div>
                <div className="cohort-description"><p>{desc}</p></div>
                <div className="cohort-date-duration">
                    <div className="start-date"><SlCalender /><p>starts {date}</p></div>
                    <div className="duration"> <MdAccessTime />{duration}</div>
                </div>


                <div className="cohort-price">
                    <div className="price"><span>₹</span><p>{price}</p></div>
                    <div className="old-price"><span>₹</span><p>{oldPrice}</p></div>
                </div>

                <button className="cta-btn-buy-now">
                    Buy Now
                </button>

            </div>
        </div>
    )
}

export default CohortsCard