import './Header.css'
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/menu.svg';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="container">
                    <div className="header_nav">
                        <div className="header_nav-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="header_nav-menu">
                            <p>Booking</p>
                            <p>Facilities</p>
                            <p>About Us</p>
                            <p>Location</p>
                            <p>Contact</p>
                            <img src={menu} alt="" />
                            <button><p>Sign In</p></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;