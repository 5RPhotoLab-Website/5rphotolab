import '../styles/MailInMobile.css';
import mailStamp from '../assets/mail-stamp.png';
import OrderTemplate from '../assets/Order Template 5R.pdf';

const MailInMobile = () => {
    return (
        <>
            <div className="main-container-mailin">
                <div className="top-mailin-mobile">
                    <div className="triangle"></div>
                    <img src={mailStamp} alt="Mail Stamp" />

                </div>
                <div className="bottom-mailin-mobile">
                    <h2>All of our great lab services are available by mail, and getting your film and disposables to us is super easy.</h2>
                    <p>1. Click here to
                        <button className='startOrder-mobile'><a href="https://5rphotolab.square.site/" target='_blank'>Start Your Order</a></button>
                        <br />
                        2. Write us a little note about your order, including the receipt number, or fill out the form below. <br />
                        3. Place your film in a freezer bag. <br />
                        4. Place the freezer bag in a padded envelope or a box with padding. <br />
                        5. Address it to:</p>
                    <p style={{ paddingLeft: "5vw" }}>5R Photo Lab <br />
                        31 Washington Square West <br />
                        Suite 3R-C <br />
                        New York, NY 10011</p>
                    <p style={{ paddingLeft: "5vw" }}>Be sure to write <b><u>Do not X-Ray</u></b> on the package.</p>
                    <p >6. Bring the package to your nearest Post Office, FedEx, or UPS - be sure to get a tracking number.</p>
                    <div className="video-container-mobile" >
                        <iframe
                            className='videoMobile'
                            width="350"
                            height="315"
                            src="https://www.youtube.com/embed/FLoB1xzZcsc"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className="startOrder-container-mobile">
                        <button className='downloadTemplate'>
                            <a
                                href={OrderTemplate}
                                download="Order Template 5R.pdf"
                            >
                                Download Form
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailInMobile;