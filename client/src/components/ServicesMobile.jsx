import { useState } from "react";
import '../styles/ServicesMobile.css';
import starSmileBlue from '../assets/star-smile-blue.png'
import starSmilePurple from '../assets/star-smile-purple.png'
import starSmileOrange from '../assets/star-smile-orange.png'
import PricesContentMobile from "./PricesContentMobile";
import OthersContentMobile from "./OthersContentMobile";

const ServicesMobile = () => {
    const [activeButton, setActiveButton] = useState('pricesBtnMobile');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    const renderContent = () => {
        switch (activeButton) {
            case 'pricesBtnMobile':
                return (
                    <div className="prices-content">
                        <PricesContentMobile />
                    </div>
                );
            case 'othersBtnMobile':
                return (
                    <div className="others-content">
                        <OthersContentMobile />
                    </div>
                );
            case 'bundlesBtnMobile':
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
        <div className="main-container-services">
            <div className="top-bar-mobile-services">
                <button className="pricesBtnMobile" onClick={() => handleButtonClick('pricesBtnMobile')}>
                    {activeButton === 'pricesBtnMobile' ?
                        <>
                            <img id="starSmileBlue" src={starSmileBlue} alt="" />
                            <span>prices</span>
                        </>
                        : <span>prices</span>}
                </button>
                <button className="othersBtnMobile" onClick={() => handleButtonClick('othersBtnMobile')}>
                    {activeButton === 'othersBtnMobile' ?
                        <>
                            <img id="starSmilePurple" src={starSmilePurple} alt="" />
                            <span>others</span>
                        </>
                        : <span>others</span>}
                </button>
                <button className="bundlesBtnMobile" onClick={() => handleButtonClick('bundlesBtnMobile')}>
                    {activeButton === 'bundlesBtnMobile' ?
                        <>
                            <img id="starSmileOrange" src={starSmileOrange} alt="" />
                            <span>bundles</span>
                        </>
                        : <span>bundles</span>}
                </button>
            </div>
            <div className="bottom-bar-mobile-services">
                {renderContent()}
            </div>
        </div>
    )
}

export default ServicesMobile;