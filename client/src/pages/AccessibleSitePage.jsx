import { Link } from 'react-router-dom';
import '../styles/AccessibleSite.css';

const AccessibleSitePage = () => {
    return (
        <div className='main-container-accessible' style={{backgroundColor: 'white', fontFamily:'Arial', fontSize:'12px'}} role="main">
            <header>
                <h1 tabIndex="0">Welcome to 5R Photo Lab!</h1>
            </header>
            <section aria-labelledby="description">
                <p id="description">
                    5R Photo Lab is a photo lab near you that develops, scans, and prints 35 millimeter film, including disposable cameras, as well as 120, 110, and APS/Advantix film.
                </p>
                <p>
                    We also make prints from your old digital files—whether it’s from your phone or a digital camera!
                </p>
                <p>
                    We also scan previously developed negatives and slides, if you’d like to digitize analogue film.
                </p>
                <p>
                    In addition, we offer mail-in film processing.
                </p>
            </section>
            <section aria-labelledby="location-info">
                <h2 id="location-info">Location and Contact Information</h2>
                <p>
                    5R Photo Lab is located at 
                    <strong> 31 Washington Square West, Suite 3R-C, New York NY 10011.</strong>
                </p>
                <p>
                    Our telephone number is <a href="tel:+16463194106">646-319-4106</a>. Our hours are 10 a.m. through 8 p.m.
                </p>
                <p>
                    We are located on the third floor of this building and our lab is accessible via elevator or stairs. Please ring the buzzer for <strong>3R-C</strong> and we will let you in the building.
                </p>
            </section>
            <section aria-labelledby="mail-in-info">
                <h2 id="mail-in-info">Mail-In Services</h2>
                <p>
                    For pricing on information about our mail-in services, please call 
                    <a href="tel:+16463194106"> 646-319-4106</a>.
                </p>
            </section>
            <section aria-labelledby="construction-info">
                <h2 id="construction-info">Page Under Construction</h2>
                <p>This page is currently under construction. Thank you for your patience.</p>
            </section>
            <footer>
                <Link to="/">
                    <button aria-label="Go back to the homepage">Go Back</button>
                </Link>
            </footer>
        </div>
    );
};

export default AccessibleSitePage;