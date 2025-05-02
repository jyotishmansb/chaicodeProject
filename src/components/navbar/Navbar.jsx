import './navbar.css'
import chaicodeLogo from '../../assets/images/chaicode-white.png'

function Navbar() {
    return (

        <nav>
            <div className="nav-left">

                <div className="logo"><img src={chaicodeLogo} alt="" /></div>
            </div>
            <ul className='nav-center'>
                <li><a href=""><span>Cohorts</span></a></li>
                <li><a href=""><span>Udemy</span></a> </li>
                <li><a href="https://docs.chaicode.com/"><span>Docs</span></a> </li>
                <li><a href=""><span>Reviews</span></a> </li>
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