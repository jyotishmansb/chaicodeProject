import './collaborate.css';
import image from '../../assets/images/vibrantCode.png'
import image2 from '../../assets/images/vc.png'
const Collaborate = () => {
    return (
        <section className='collaborate'>
            <div className="collaborate-container">
                <div className="collaborate-left">
                    <div className="text">
                        <h1>Collaborate</h1>
                        <p>Work with peers in realtime</p>
                    </div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="collaborate-right">
                    <div className="text">
                        <h1>Assignment</h1>
                        <p>Take a challenging assignment</p>
                    </div>
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                </div>



            </div>



        </section>
    )
}

export default Collaborate