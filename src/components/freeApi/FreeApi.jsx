import './freeApi.css';
import ReactPlayer from "react-player";
const FreeApi = () => {
    return (
        <section className='section-freeApi'>
            <div className="container-freeApi">
               <div className="section-heading">
               <h1>Free API - OpenSource</h1>
               </div>
              
             

                <div className="freeApi-wrapper">

                    <div className="freeApi-left">
                      
                            <h2 className="heading">UnLock your potential with our API hub</h2>
                            <p className="para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
                                dolores aliquam tempora ipsa sapiente nihil eaque laborum impedit velit
                                molestiae unde ullam commodi eius laboriosam dolor facere molestias mollitia
                                temporibus libero ipsam esse sit! Earum reprehenderit dolorem consectetur adipisci autem!
                            </p>
                       
                    </div>

                    <div className="freeApi-right">
                        <div className="freeApi-ytVideo-container">
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

                </div>

              
                  <a href="https://freeapi.hashnode.space/api-guide/apireference/getARandomQuote" className="freeApi-btn"> Check freeAPI Docs</a> 
               

            </div>




        </section>



    )
}

export default FreeApi