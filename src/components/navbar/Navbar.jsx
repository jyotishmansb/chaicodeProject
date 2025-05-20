import './navbar.css';
import chaicodeLogo from '../../assets/images/chaicode-white.png';
import { Link } from 'react-router-dom';


function Navbar() {
    return (

        <nav>
            <div className="nav-left">

                <div className="logo"><a href="/"><img src={chaicodeLogo} alt="" /></a></div>
            </div>
            <ul className='nav-center'>
                <li><Link to={{pathname:'/' , hash:'#cohorts'}}><span>Cohorts</span></Link></li>
                <li><Link to={{pathname:'/' , hash:'#udemy'}}><span>Udemy</span></Link></li>
                <li><a href="https://docs.chaicode.com/"><span>Docs</span></a> </li>
                <li><Link to={{pathname:'/' , hash:'#reviews'}}><span>Reviews</span></Link> </li>
            </ul>

            <div className="nav-right">
                <a href="https://courses.chaicode.com/learn/account/signin">
                <button className='login-btn'>Login</button>

                </a>
               
            </div>
        </nav>
    )
}

export default Navbar