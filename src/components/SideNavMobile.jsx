import "../styles/SideNavMobile.css";
import menu from '../assets/menu.png';
import close from '../assets/close.png'
import React, { useState } from "react";
import { Link, useRoutes } from 'react-router-dom'
import ServicesMobile from './ServicesMobile';
import MailInMobile from './MailInMobile';
import ContactMobile from './ContactMobile';
import HomePageMobile from "./HomePageMobile";
import ErrorPage from "./ErrorPage";


const SideNavMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
        console.log("opened");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log("closed")
    };

    const handleButtonClick = (buttonName) => {
        setButtonClicked(buttonName);
        console.log(buttonName)
    }

    let element = useRoutes([
        {
            path: "/",
            element: <HomePageMobile />
        },
        {
            path: "/services",
            element: <ServicesMobile />
        },
        {
            path: "/mail-in",
            element: <MailInMobile />
        },
        {
            path: "/contact",
            element: <ContactMobile />
        },
        {
            path: "*",
            element: <ErrorPage />
        }
    ]);

    return (
        <>
            {/* The Modal */}
            {isModalOpen && (
                <div id="myModal" className={`modal ${isModalOpen ? 'open' : ''}`}>
                    {/* Modal content */}
                    <div className="modal-content">
                        <button className="close" onClick={closeModal}><img id="closeIcon" src={close} alt="Close Button" /></button>

                        <Link to="/">
                            <div className="container-btn-mobile">
                                <button className={buttonClicked === 'home' ? 'homeBtn clicked' : 'homeBtn'} onClick={() => handleButtonClick('home')}>
                                    <span className="arrowBtnTextHome">home</span>
                                </button>
                            </div>
                        </Link>
                        <Link to="/services">
                            <div className="container-btn-mobile">
                                <button className={buttonClicked === 'services' ? 'servicesBtn clicked' : 'servicesBtn'} onClick={() => handleButtonClick('services')}>
                                    <span className="arrowBtnText">services</span>
                                </button>
                            </div>
                        </Link>
                        <Link to="/mail-in">
                            <div className="container-btn-mobile">
                                <button className={buttonClicked === 'mail-in' ? 'mailInBtn clicked' : 'mailInBtn'} onClick={() => handleButtonClick('mail-in')}>
                                    <span className="arrowBtnText">mail-in</span>
                                </button>
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className="container-btn-mobile">
                                <button className={buttonClicked === 'contact' ? 'contactBtn clicked' : 'contactBtn'} onClick={() => handleButtonClick('contact')}>
                                    <span className="arrowBtnText">contact</span>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            )}

            {element}
            <button className="menuBtn" onClick={openModal}><img id="menuIcon" src={menu} alt="Menu Button" /></button>
        </>
    )
}

export default SideNavMobile;