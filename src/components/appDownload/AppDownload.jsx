import './appDownload.css';
import { MdOutlineFileDownload } from "react-icons/md";

const AppDownload = () => {
    return (
        <section className='section-appdownload'>

            <div className="container-appdownload">
                <div className="appdownload-wrapper">
                    <div className="appdownload-left">
                        <div className="mobile">

                        </div>
                    </div>






                    <div className="appdownload-right">
                        <div className="heading"><h2>Learn On the Go</h2></div>
                        <div className="desc"><p>Take your coding journey anywhere
                            with the ChaiCode mobile app. Access courses,
                            join live sessions, and connect with the community - all from your
                            pocket.</p>
                        </div>


                        <div className="features">
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <div>Offline course access</div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🔔</div>
                                <div>Live session notifications</div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">📱</div>
                                <div>Revision while commuting</div>
                            </div>
                        </div>


                        <div className="download-buttons">
                            <button className="download-button">
                                <span className="button-icon"><MdOutlineFileDownload size={25} /></span>
                                <div className="button-text">
                                    <div className="button-small">Download on the</div>
                                    <div className="button-large">App Store</div>
                                </div>
                            </button>

                            <button className="download-button">
                                <span className="button-icon"><MdOutlineFileDownload size={25} /></span>
                                <div className="button-text">
                                    <div className="button-small">Get it on</div>
                                    <div className="button-large">Google Play</div>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </section>



    )
}

export default AppDownload