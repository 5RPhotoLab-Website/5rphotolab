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
import AccessibleSite from "./AccessibleSite";


const SideNavMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleButtonClick = (buttonName) => {
        setButtonClicked(buttonName);
        closeModal();
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
            path: "/accessible-site",
            element: <AccessibleSite />
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
                                <button className={buttonClicked === 'home' ? 'homeBtn-mobile clicked' : 'homeBtn-mobile'} onClick={() => handleButtonClick('home')}>
                                    <span className="arrowBtnTextHome">home</span>
                                </button>
                            </div>
                        </Link>
                        <Link to="/services">
                            <div className="container-btn-mobile">
                                <button className={buttonClicked === 'services' ? 'servicesBtn-mobile clicked' : 'servicesBtn-mobile'} onClick={() => handleButtonClick('services')}>
                                    <span className="arrowBtnText">services</span>
                                </button>
                            </div>
                        </Link>
                        <Link to="/mail-in">
                            <div className="container-btn-mobile">
                                <button className={buttonClicked === 'mail-in' ? 'mailInBtn-mobile clicked' : 'mailInBtn-mobile'} onClick={() => handleButtonClick('mail-in')}>
                                    <span className="arrowBtnText">mail-in</span>
                                </button>
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className="container-btn-mobile">
                                <button className={buttonClicked === 'contact' ? 'contactBtn-mobile clicked' : 'contactBtn-mobile'} onClick={() => handleButtonClick('contact')}>
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