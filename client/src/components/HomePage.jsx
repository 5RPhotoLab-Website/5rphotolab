import '../styles/HomePage.css'
import searchIcon from '../assets/search.png'
import videoMapIcon from '../assets/video-map.png'
import sixTrainIcon from '../assets/sixTrainIcon.png'
import RandWTrainIcons from '../assets/RandWTrainIcons.png'

const HomePage = () => {
    return (
        <>
            <div className="main-container">
                <div className="top-bar">
                    <img id="searchIcon" src={searchIcon} alt="" />
                    <p className='search-title'> photo lab near me<span className="typing">|</span></p>
                    <a href="https://www.instagram.com/p/CqqZVICtDeL/?hl=en" target="_blank"><img id="videoMapIcon" src={videoMapIcon} alt="" /></a>
                    <span className="video-map-note">video map</span>
                </div>
                <div className="bottom-bar">
                    <section className="content-wrapper">
                        <article className="left-column">
                            <div className="text-box">
                                <p>
                                    We are a photo lab <strong>NEAR YOU</strong> that{" "}
                                    <strong>develops</strong>, <strong>scans</strong>, and{" "}
                                    <strong>prints</strong> <strong>35mm</strong>,{" "}
                                    <strong>including disposable cameras</strong>,{" "}
                                    <strong>120</strong>, <strong>110</strong>, and{" "}
                                    <strong>APS/Advantix film</strong>.
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
                        </article>
                        <article className="right-column">
                            <div className="location-info">
                                <p>
                                    We are conveniently located in Greenwich Village, near New York
                                    University, New School, Parsons, Cooper Union, Astor Place, and
                                    the East Village. <br />
                                    We are also moments away from Astor Place <img class="sixTrainIcon" src={sixTrainIcon} alt="" /> subway station, and 8
                                    St-NYU <img class="RandWTrainIcons" src={RandWTrainIcons} alt="" /> station.
                                </p>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomePage;