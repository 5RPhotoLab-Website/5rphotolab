import '../styles/ContactMobile.css';
import ellipses from '../assets/three-ellipses-contact.png';
import instagramIcon from '../assets/instagram.png';
import tikTokIcon from '../assets/TikTok.png';

const ContactMobile = () => {
    return (
        <>
            <div className="contact-container">
                <div className="table1">
                    <div className="top-contact-1">
                        <img src={ellipses} alt="Three Ellipses" />
                    </div>
                    <div className="bottom-contact-1">
                        <p>follow us on <br /> instagram and tiktok!</p>
                        <a href="https://www.instagram.com/5rphotolab/?hl=en">@5RPhotoLab</a>
                    </div>
                </div>
                <div className="table2">
                    <div className="top-contact-2">
                        <img src={ellipses} alt="Three Ellipses" />
                    </div>
                    <div className="bottom-contact-2">
                        <p>call or text us</p>
                        <a href="tel:+16463194106">646-319-4106</a>
                    </div>
                </div>
                <div className="table3">
                    <div className="top-contact-3">
                        <img src={ellipses} alt="Three Ellipses" />
                    </div>
                    <div className="bottom-contact-3">
                        <p>email us</p>
                        <a href="mailto:info@5rphotolab.com">info@5rphotolab.com</a>
                    </div>
                </div>
                {/* <div className="socialMediaMobile-contact">
                    <a href="https://www.instagram.com/5rphotolab/?hl=en" target="_blank">
                        <button className="instagramMobile"><img id="inIconMobile" src={instagramIcon} alt="Instagram Icon" /></button>
                    </a>
                    <a href="https://www.tiktok.com/@5rphotolab" target="_blank">
                        <button className="tiktokMobile"><img id="tikIconMobile" src={tikTokIcon} alt="TikTok Icon" /></button>
                    </a>
                </div> */}

            </div>

        </>
    )
}

export default ContactMobile;