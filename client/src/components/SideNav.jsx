import '../styles/SideNav.css';
import filmyColor1 from '../assets/filmy-color1.png';
import instagramIcon from '../assets/instagram.png';
import tikTokIcon from '../assets/TikTok.png';
import { Link, useRoutes } from 'react-router-dom'
import ServicesPage from '../pages/ServicesPage.jsx'
import MailInPage from '../pages/MailInPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import HomePage from '../pages/HomePage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import { useState, useEffect } from 'react';
import AccessibleSitePage from '../pages/AccessibleSitePage.jsx';
import ItemDetailsPage from '../pages/ItemDetailsPage';
import CheckoutForm from './CheckoutForm';

const SideNav = () => {
    const [buttonClicked, setButtonClicked] = useState('');
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const fetchItems = async () => {
    //         const response = await fetch('http://localhost:5050/api/items');
    //         const data = await response.json();
    //         setItems(data);
    //     }
    //     fetchItems();
    // }, []);

    const circles = [
        { id: 1, className: "top-left" },
        { id: 2, className: "top-right" },
        { id: 3, className: "bottom-left" },
        { id: 4, className: "bottom-right" },
    ];

    useEffect(() => {
        // Retrieve button state from local storage
        const storedButtonClicked = localStorage.getItem('buttonClicked');
        if (storedButtonClicked) {
            setButtonClicked(storedButtonClicked);
        }
    }, []);

    // let element = useRoutes([
    //     {
    //         path: "/",
    //         element: <HomePage items={items}/>
    //     },
    //     {
    //         path: "/services",
    //         element: <ServicesPage />
    //     },
    //     {
    //         path: "/mail-in",
    //         element: <MailInPage />
    //     },
    //     {
    //         path: "/contact",
    //         element: <ContactPage />
    //     },
    //     {
    //         path: "/accessible-site",
    //         element: <AccessibleSitePage />
    //     },
    //     {
    //         path: "/items/:id",
    //         element: <ItemDetailsPage items={items} />
    //     },
    //     {
    //         path:"/checkout",
    //         element: <CheckoutForm />
    //     },
    //     {
    //         path: "*",
    //         element: <ErrorPage />
    //     }
    // ]);

    const handleButtonClick = (buttonName) => {
        setButtonClicked(buttonName);
        // Store button state in local storage
        localStorage.setItem('buttonClicked', buttonName);
    }

    const handleResetButtonClick = () => {
        setButtonClicked('');
        localStorage.removeItem('buttonClicked');
    };


    return (
        <>
            <h1 className='sideNavTitle' aria-label="5R PHOTO LAB">5R PHOTO LAB</h1>

            <div className='sidenav'>
                <Link to="/" onClick={handleResetButtonClick}><img className="filmy-image" src={filmyColor1} alt="Filmy Color Logo" /></Link>
                <h1 className="filmy-title">My name is filmy!</h1>

                <Link to="/services">
                    <div className="container-btn">
                        <button className={buttonClicked === 'services' ? 'servicesBtn clicked' : 'servicesBtn'} onClick={() => handleButtonClick('services')}>
                            <span className="arrowBtnText">services</span>
                        </button>
                    </div>
                </Link>
                <Link to="/mail-in">
                    <div className="container-btn">
                        <button className={buttonClicked === 'mail-in' ? 'mailInBtn clicked' : 'mailInBtn'} onClick={() => handleButtonClick('mail-in')}>
                            <span className="arrowBtnText">mail-in</span>
                        </button>
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="container-btn">
                        <button className={buttonClicked === 'contact' ? 'contactBtn clicked' : 'contactBtn'} onClick={() => handleButtonClick('contact')}>
                            <span className="arrowBtnText">contact</span>
                        </button>
                    </div>
                </Link>

                <div className="rectangleContainer">
                    <section className="eyes">
                        {circles.slice(0, 2).map((circle) => (
                            <div key={circle.id} className={`circle ${circle.className}`} />
                        ))}
                    </section>
                    <section className="box-body">
                        <div className="address">
                            <a href="https://goo.gl/maps/rQm69yR6bPAjnHyb7" target="_blank">31 Washington</a> <br />
                            <a href="https://goo.gl/maps/rQm69yR6bPAjnHyb7" target="_blank">Square W STE 3R-C</a> <br />
                        </div>
                        <div className="hours">
                            10AM - 8PM
                        </div>
                        <div className="phoneNumber">
                            <a href="tel:+16463194106">+1 (646) 319-4106</a>
                        </div>
                        <div className="socialMedia">
                            <a href="https://www.instagram.com/5rphotolab/?hl=en" target="_blank">
                                <button className="instagram"><img id="inIcon" src={instagramIcon} alt="Instagram Icon" /></button>
                            </a>
                            <a href="https://www.tiktok.com/@5rphotolab" target="_blank">
                                <button className="tiktok"><img id="tikIcon" src={tikTokIcon} alt="TikTok Icon" /></button>
                            </a>
                        </div>
                    </section>
                    <section className="feet">
                        {circles.slice(2).map((circle) => (
                            <div key={circle.id} className={`circle ${circle.className}`} />
                        ))}
                    </section>
                    <div className="buzzInContainer">
                        <a href="https://www.5rphotolab.com/" target="_blank">
                            <button className='buzzInBtn'>buzZz in!</button>
                        </a>
                    </div>
                </div>
                <Link to="/accessible-site"><p style={{fontFamily:'Arial', fontSize:'12px', backgroundColor:'white'}}>Accessible Site</p></Link>
            </div>

            {/* {element} */}
        </>
    )
}

export default SideNav;
