import "../styles/HomePageMobile.css"
import filmyColorOnly from '../assets/filmy-color-only.png';
import FiveRLOGO from '../assets/FiveRLOGO.png';
import searchIcon from '../assets/search.png'
import videoMapIconMobile from '../assets/videoMapIconMobile.png'
import sixTrainIcon from '../assets/sixTrainIcon.png'
import RandWTrainIcons from '../assets/RandWTrainIcons.png'
import washSqTrains from '../assets/washSqTrains.png'
import instagramIcon from '../assets/instagram.png';
import tikTokIcon from '../assets/TikTok.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePageMobile = () => {
    const circles = [
        { id: 1, className: "top-left" },
        { id: 2, className: "top-right" },
        { id: 3, className: "bottom-left" },
        { id: 4, className: "bottom-right" },
    ];

    const [startMailInPressed, setStartMailInPressed] = useState(false);
    const [moreInfoPressed, setMoreInfoPressed] = useState(false);

    const handleClick = (setButtonState) => {
        setButtonState(true);
        setTimeout(() => {
            setButtonState(false);
        }, 200);
    };

    return (
        <div className="main-container-mobile">
            <div className="logo-container">
                <img className="fiverlogo" src={FiveRLOGO} alt="5R Logo" />
            </div>
            <div className="welcome">welcome to 5r photo lab!</div>
            <div className="box1"></div>
            <div className="box2"></div>

            <a
                href="https://5rphotolab.square.site/"
                target="_blank"
                className={`startMailInBtn ${startMailInPressed ? "pressed" : ""}`}
                role="link"
                onClick={() => handleClick(setStartMailInPressed)}
            >
                start your mail-in order
            </a>

            <div className="box3"></div>

            {/* <a
                href="#"
                className={`moreInfoBtn ${moreInfoPressed ? "pressed" : ""}`}
                role="link"
                onClick={() => handleClick(setMoreInfoPressed)}
            >
                more info on <br /> mail in services
            </a> */}
            <Link
                to="/mail-in"
                className={`moreInfoBtn ${moreInfoPressed ? "pressed" : ""}`}
                onClick={() => handleClick(setMoreInfoPressed)}
            >
                more info on <br /> mail-in services
            </Link>

            <div className="box4"></div>
            <div className="visitUsBtn">visit us in nyc</div>
            <div className="box5"></div>
            <div className="box6"></div>


            <div className="top-bar-mobile">
                <img id="searchIconMobile" src={searchIcon} alt="" />
                <p className='search-title-mobile'>photo lab near me</p>
            </div>
            <div className="bottom-bar-mobile">
                <div className="header-box-mobile">
                    <div className="washSqSubway">
                        <p>W 4St-Wash Sq</p>
                        <img src={washSqTrains} alt="W 4St-Wash Sq Trains" />
                    </div>
                    <a href="https://www.instagram.com/p/CqqZVICtDeL/?hl=en" target="_blank"><img id="videoMapIconMobile" src={videoMapIconMobile} alt="" /></a>
                    <span className="video-map-note-mobile">video map</span>
                </div>

                <div className="wrapTextAndLocation">
                    <div className="text-box-mobile">
                        <p>
                            We are a photo lab <span className="highlightHP">NEAR YOU</span> that{" "}
                            <span className="highlightHP">develops</span>, <span className="highlightHP">scans</span>, and{" "}
                            <span className="highlightHP">prints</span> <span className="highlightHP">35mm</span>,{" "}
                            <span className="highlightHP">including disposable cameras</span>,{" "}
                            <span className="highlightHP">120</span>, <span className="highlightHP">110</span>, and{" "}
                            <span className="highlightHP">APS/Advantix film</span>.
                        </p>
                        <p>
                            We also make prints from your digital files—whether it's from
                            your phone or a digital camera!
                        </p>
                        <p>
                            We also scan previously developed negatives and slides, if you'd
                            like to digitize analogue film.
                        </p>
                    </div>
                    <div className="location-info-mobile">
                        <p>
                            We are conveniently located in Greenwich Village, near New York
                            University, New School, Parsons, Cooper Union, Astor Place, and
                            the East Village. <br />
                            We are also moments away from Astor Place <img className="sixTrainIcon" src={sixTrainIcon} alt="" /> subway station, and 8
                            St-NYU <img className="RandWTrainIcons" src={RandWTrainIcons} alt="" /> station.
                        </p>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <img className="filmyColorOnlyHalfHidden" src={filmyColorOnly} alt="Filmy Color Logo" />
            </div>

            <div className="rectangleContainerMobile">
                <section className="eyesMobile">
                    {circles.slice(0, 2).map((circle) => (
                        <div key={circle.id} className={`circleMobile ${circle.className}`} />
                    ))}
                </section>
                <section className="rectContainerBodyMobile">
                    <div className="addressMobile">
                        <a href="https://goo.gl/maps/rQm69yR6bPAjnHyb7" target="_blank">31 Washington</a> <br />
                        <a href="https://goo.gl/maps/rQm69yR6bPAjnHyb7" target="_blank">Square W STE 3-RC</a> <br />
                    </div>
                    <div className="hoursMobile">
                        10AM - 8PM
                    </div>
                    <div className="phoneNumberMobile">
                        <a href="tel:+16463194106">+1 (646) 319-4106</a>
                    </div>

                    <Link to="/accessible-site"><p style={{ fontFamily: 'Arial', fontSize: '12px', backgroundColor: 'white' }}>Accessible Site</p></Link>

                </section>
                <section className="feetMobile">
                    {circles.slice(2).map((circle) => (
                        <div key={circle.id} className={`circleMobile ${circle.className}`} />
                    ))}
                </section>
                <div className="buzzInContainerMobile">
                    <a href="https://www.5rphotolab.com/" target="_blank">
                        <button className='buzzInBtn-mobile'>buzZz in!</button>
                    </a>
                </div>
            </div>

            <div className="socialMediaMobile">
                <a href="https://www.instagram.com/5rphotolab/?hl=en" target="_blank">
                    <button className="instagramMobile"><img id="inIconMobile" src={instagramIcon} alt="Instagram Icon" /></button>
                </a>
                <a href="https://www.tiktok.com/@5rphotolab" target="_blank">
                    <button className="tiktokMobile"><img id="tikIconMobile" src={tikTokIcon} alt="TikTok Icon" /></button>
                </a>
            </div>
        </div>
    )
}

export default HomePageMobile;