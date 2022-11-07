import './Main.css'
import calendar1 from '../../assets/images/calendar 1.svg';
import man from '../../assets/images/man.svg';
import loc from '../../assets/images/loc.svg';
import search from '../../assets/images/search.svg';
import yaxta from '../../assets/images/yaxta.png';
import pool from '../../assets/images/pool.png';
import bed from '../../assets/images/bed.png';
import loading from '../../assets/images/loading.svg'
import Group83 from '../../assets/images/Group 83.svg'
import Group84 from '../../assets/images/Group 84.svg'
import wifi from '../../assets/images/wifi.svg'
import coffe from '../../assets/images/coffe.svg'
import garden_house from '../../assets/images/garden_house.png'
import HotelsLogo from '../../assets/images/Hotels.com-Logo.wine 1.svg'
import HyattLogo from '../../assets/images/Hyatt-Logo.wine 1.svg'
import ParkResortsLogo from '../../assets/images/Park_Hotels_&_Resorts-Logo.wine 1.svg'
import CushmanWakefieldLogo from '../../assets/images/Cushman_&_Wakefield-Logo.wine 1.svg'
import HiltonPortlandHotelLogo from '../../assets/images/Hilton_Portland_Hotel-Logo.wine 1.svg'
import womeen from '../../assets/images/womeen.png'
import circel_women from '../../assets/images/circel_women.svg'
// import loading from '../../assets/images/loading.svg'
import villa from '../../assets/images/villa.png'
import bad_dub from '../../assets/images/bad-dub.png'
import dubai_led from '../../assets/images/dubai-led.png'

function Main() {
    return (
        <main className="main">
        <div className="container">
            <section className="section_hotel">
                <div className="section_hotel-top">
                    <div className="section_hotel-top-left">
                        <p>Find Your Best Hotel for Deals</p>
                        <p className="section_hotel-top-left22">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="section_hotel-top-right">
                        <div className="section_hotel-top-right-button">
                            <button className="section_hotel-top-right-button-cal">
                                <img src={calendar1} alt=""/>
                                <p>Jun 10 - 14</p>
                            </button>
                            <button className="section_hotel-top-right-button-loc">
                                <img src={man} alt=""/>
                                <p>2 Guests</p>
                            </button>
                        </div>

                        <div className="section_hotel-top-right-searchbox">
                            <button className="section_hotel-top-right-btn1">
                                <img src={loc} alt=""/>
                                <p>United States</p>
                            </button>
                            <button className="section_hotel-top-right-btn2">
                                <img src={search} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="section_hotel-bottom">
                    <div className="section_hotel-bottom-right">
                        <img src={yaxta} alt=""/>
                    </div>
                    <div className="section_hotel-bottom-left">
                        <img className="section_hotel-bottom-left-img11" src={pool} alt=""/>
                        <img className="section_hotel-bottom-left-img22" src={bed} alt=""/>
                    </div>
                </div>
            </section>

            <sesction className="section_advandage">
                <div className="section_advandage-top">
                    <div className="section_advandage-top-left">
                        <p>Facilities & Service</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    </div>

                    <div className="section_advandage-top-right">
                        <p>View All</p>
                        <img src={loading} alt=""/>
                    </div>
                </div>

                <div className="section_advandage-bottom">
                    <div className="section_advandage-bottom-boxes">
                        <div className="section_advandage-bottom-box1">
                            <img src={Group83} alt=""/>
                            <p>Private Workspace</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </div>

                        <div className="section_advandage-bottom-box1">
                            <img src={Group84} alt=""/>
                            <p>Parking Area</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </div>

                        <div className="section_advandage-bottom-box1">
                            <img src={wifi} alt=""/>
                            <p>Free Wifi</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </div>

                        <div className="section_advandage-bottom-box1">
                            <img src={coffe} alt=""/>
                            <p>Breakfast</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </div>
                    </div>
                </div>
            </sesction>

            <section className="section_greenhouse">
                <div className="section_greenhouse-in">
                    <div className="section_greenhouse-in-img">
                        <img src={garden_house} alt=""/>
                    </div>
                    <div className="section_greenhouse-in-texts">
                        <p className="section_greenhouse-in-texts-header">Finest Luxury Hotels & Resort</p>
                        <p className="section_greenhouse-in-texts-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="section_greenhouse-in-texts-users">
                                <div className="section_greenhouse-in-texts-users-sound-box">
                                    <p>120K+</p>
                                    <p>Website User</p>
                                </div>
                                <div className="section_greenhouse-in-texts-users-sound-box">
                                    <p>110K+</p>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="section_greenhouse-in-texts-users-sound-box">
                                    <p>20K+</p>
                                    <p>Active Hotels</p>
                                </div>
                                <div className="section_greenhouse-in-texts-users-sound-box">
                                    <p>8Y+</p>
                                    <p>company Year</p>
                                </div>
                        </div>

                        <button className="section_greenhouse-in-texts-btn">
                            Explore More
                        </button>
                    </div>
                </div>

                <div className="section_greenhouse-hotels">
                    <img src={HotelsLogo} alt=""/>
                    <img src={HyattLogo} alt=""/>
                    <img src={ParkResortsLogo} alt=""/>
                    <img src={CushmanWakefieldLogo} alt=""/>
                    <img src={HiltonPortlandHotelLogo} alt=""/>
                </div>

                <div className="section_greenhouse-women">
                    <div className="section_greenhouse-women-left">
                        <img src={womeen} alt=""/>
                    </div>

                    <div className="section_greenhouse-women-right">
                        <img className='aniii' src={circel_women.svg} alt=""/>
                        <p>Nazmul Nabeel</p>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ”</p>
                    </div>
                </div>
            </section>

            <section className="section_dubai">
                <div className="section_dubai-top">
                    <div className="section_dubai-top-left">
                        <p className="section_dubai-top-left-heaedr">Best Quality Hotels</p>
                        <p className="section_dubai-top-left-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="section_dubai-top-cards">
                            <button>
                                1 Star
                            </button>
                        
                            <button>
                                2 Star
                            </button>
                        
                            <button>
                                3 Star
                            </button>
                        
                            <button>
                                4 Star
                            </button>
                            
                            <button>
                                5 Star
                            </button>
                        </div>
                    </div>

                    <div className="section_dubai-top-right">
                        <p>View All</p>
                        <img src={loading} alt=""/>
                    </div>
                </div>

                <div className="section_dubai-bottom">
                    <div className="section_dubai-bottom-box1">
                        <img src={villa} alt=""/>
                        <p className="section_dubai-bottom-box1-heaedr">Swimming pool and beach of luxury...</p>
                        <p className="section_dubai-bottom-box1-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="section_dubai-bottom-box1-price">
                            <p>$250 /NIGHT</p>
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="section_dubai-bottom-box1">
                        <img src={bad_dub} alt=""/>
                        <p className="section_dubai-bottom-box1-heaedr">Swimming pool and beach of luxury...</p>
                        <p className="section_dubai-bottom-box1-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="section_dubai-bottom-box1-price">
                            <p>$250 /NIGHT</p>
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="section_dubai-bottom-box1">
                        <img src={dubai_led} alt=""/>
                        <p className="section_dubai-bottom-box1-heaedr">Swimming pool and beach of luxury...</p>
                        <p className="section_dubai-bottom-box1-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="section_dubai-bottom-box1-price">
                            <p>$250 /NIGHT</p>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div className="container">
            <div className="section_admin">
                <p className="section_admin-heaedr">Subscribe for our mailing list to get latest updates and offers</p>
                <p className="section_admin-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                <form className="email" action="email">
                    <input type="email" placeholder="Enter your emal"/>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </main>
    )
}

export default Main;