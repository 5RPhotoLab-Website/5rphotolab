import { useState } from "react";
import '../styles/ServicesMobile.css';
import starSmileBlue from '../assets/star-smile-blue.png'
import starSmilePurple from '../assets/star-smile-purple.png'
import starSmileOrange from '../assets/star-smile-orange.png'

const ServicesMobile = () => {
    const [activeButton, setActiveButton] = useState('pricesBtnMobile');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    const renderContent = () => {
        switch (activeButton) {
            // case 'pricesBtn':
            //     return (
            //         <div className="prices-content">
            //             <PricesContentMobile />
            //         </div>
            //     );
            // case 'othersBtn':
            //     return (
            //         <div className="others-content">
            //             <OthersContentMobile />
            //         </div>
            //     );
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
        <div className="main-container-services">
            <div className="top-bar-mobile">
                <button className="pricesBtnMobile" onClick={() => handleButtonClick('pricesBtnMobile')}>
                    {activeButton === 'pricesBtnMobile' ?
                        <span><img id="starSmile" src={starSmileBlue} alt="" /> prices</span>
                        : <span>prices</span>}
                </button>
                <button className="othersBtn" onClick={() => handleButtonClick('othersBtn')}>
                    {activeButton === 'othersBtn' ?
                        <span><img id="starSmile" src={starSmilePurple} alt="" /> others</span>
                        : <span>others</span>}
                </button>
                <button className="bundlesBtn" onClick={() => handleButtonClick('bundlesBtn')}>
                    {activeButton === 'bundlesBtn' ?
                        <span><img id="starSmile" src={starSmileOrange} alt="" /> bundles</span>
                        : <span>bundles</span>}
                </button>
            </div>
            <div className="bottom-bar-mobile">
                {renderContent()}
            </div>
        </div>
    )
}

export default ServicesMobile;