import './notFound.css';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-container">
                <h1>Page Not Found</h1>
                <Link to='/' className="btn">Go Back To Home</Link>
            </div>


        </div>




    )
}

export default NotFound