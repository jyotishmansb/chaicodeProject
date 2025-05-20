import ReactPlayer from "react-player";
import './cohortsCard.css';
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";

const CohortsCard = ({ youtubeUrl, title, desc, date, duration, price, oldPrice, link }) => {
    return (
        <article className="cohortsCard-container">

            <div className="react-player-wrapper">
                <ReactPlayer className="react-player"
                    url={youtubeUrl}

                    light
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
                <h2 className="cohort-title">{title}</h2>
                <p className="cohort-description">{desc}</p>
                <div className="cohort-date-duration">
                    <div className="start-date"><SlCalender /><span>starts {date}</span></div>
                    <div className="duration"> <MdAccessTime /><span>{duration}</span></div>
                </div>
                <div className="cohort-price">
                    <div className="price"><span>₹</span>{price}</div>
                    <div className="old-price"><span>₹</span>{oldPrice}</div>
                </div>
            </div>

            <a className="cta-btn-buy-now" href={link}>  Buy Now</a>

        </article>
    )
}

export default CohortsCard