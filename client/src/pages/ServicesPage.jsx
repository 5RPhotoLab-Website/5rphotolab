import { useState } from "react";
import '../styles/Services.css';
import starSmileBlue from '../assets/star-smile-blue.png'
import starSmilePurple from '../assets/star-smile-purple.png'
import starSmileOrange from '../assets/star-smile-orange.png'
import PricesContent from "../components/PricesContent";
import OthersContent from "../components/OthersContent";

const ServicesPage = () => {
    const [activeButton, setActiveButton] = useState('pricesBtn');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    const renderContent = () => {
        switch (activeButton) {
            case 'pricesBtn':
                return (
                    <div className="prices-content">
                        <PricesContent />
                    </div>
                );
            case 'othersBtn':
                return (
                    <div className="others-content">
                        <OthersContent />
                    </div>
                );
            case 'bundlesBtn':
                return (
                    <div className="bundles-content">
                        <h1 className="bundlesTitle">CHECK BACK SOON!</h1>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="main-container">
                <div className="top">
                    <button className="pricesBtn" onClick={() => handleButtonClick('pricesBtn')}>
                        {activeButton === 'pricesBtn' ?
                            <span><img id="starSmile" src={starSmileBlue} alt="" /> prices <img id="starSmile" src={starSmileBlue} alt="" /></span>
                            : <span>prices</span>}
                    </button>
                    <button className="othersBtn" onClick={() => handleButtonClick('othersBtn')}>
                    {activeButton === 'othersBtn' ?
                            <span><img id="starSmile" src={starSmilePurple} alt="" /> others <img id="starSmile" src={starSmilePurple} alt="" /></span>
                            : <span>others</span>}
                    </button>
                    <button className="bundlesBtn" onClick={() => handleButtonClick('bundlesBtn')}>
                    {activeButton === 'bundlesBtn' ?
                            <span><img id="starSmile" src={starSmileOrange} alt="" /> bundles <img id="starSmile" src={starSmileOrange} alt="" /></span>
                            : <span>bundles</span>}
                    </button>
                </div>
                <div className="bottom">
                    {renderContent()}
                </div>
            </div>
        </>
    )
}

export default ServicesPage;