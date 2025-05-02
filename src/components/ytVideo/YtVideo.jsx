import ReactPlayer from "react-player";
import './ytVideo.css'

const YtVideo = () => {
    return (
        <section className='section-ytVideo'>

        
            <div className="ytVideo-container">
           
          
            <div className="player-wrapper">
                <ReactPlayer className="react-player"
                  url="https://youtu.be/VNb_LawBBWU"
    

                  playing={false}        // Autoplays when possible
                  muted={false}          // Muted by default (better UX and autoplay works)
                  controls={true}       // Show player controls
                  width="100%"
                  height="100%"
                  playsinline           // Better for mobile
                
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        rel: 0          // Don't show related videos
                      }
                    }
                  }}
                >

                </ReactPlayer>
                </div>

            </div>

            



        </section>



    )
}

export default YtVideo