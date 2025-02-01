import '../styles/MailIn.css'
import OrderTemplate from '../assets/Order Template 5R.pdf';

const MailIn = () => {
    return (
        <>
            <div className="main-container">
                <div className="top-mailin">
                    <h1 style={{ color: "black", padding: "20px" }}>All of our great lab services are available by mail, and getting your film and disposables to us is super easy.</h1>
                </div>

                <div className="bottom-mailin">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div className="instructions-container" style={{ flex: "1" }}>
                            <p style={{ fontSize: "22px" }}>1. Click here to
                                <button className='startOrder'><a href="https://5rphotolab.square.site/" target='_blank'>Start Your Order</a></button>
                                <br />
                                2. Write us a little note about your order, including the order number, or fill out the form below. <br />
                                3. Place your film in a ziploc. <br />
                                4. Place the bag in a padded envelope or a box with padding along with the form. <br />
                                5. Address it to:</p>
                            <p style={{ fontSize: "22px", paddingLeft: "5vw" }}>5R Photo Lab <br />
                                31 Washington Square West <br />
                                Suite 3R-C <br />
                                New York, NY 10011</p>
                            <p style={{ fontSize: "22px", paddingLeft: "5vw" }}>Be sure to write <b><u>Do not X-Ray</u></b> on the package.</p>
                            <p style={{ fontSize: "22px" }}>6. Bring the package to your nearest Post Office, FedEx, or UPS - be sure to get a tracking number.</p>
                        </div>
                        <div className="video-container" style={{ flex: "1" }}>
                            <iframe
                                className='videoDesktop'
                                src="https://www.youtube.com/embed/FLoB1xzZcsc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                    <div className="startOrder-container">
                        <button className='downloadTemplate'>
                            <a
                                href={OrderTemplate}
                                download="Order Template 5R.pdf"
                            >
                                Download Form
                            </a>
                        </button>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <div style={{ marginBottom: "20px" }}>
                            <iframe
                                src={OrderTemplate}
                                title="PDF Viewer"
                                width="600"
                                height="830"
                                style={{
                                    border: "1px solid #ccc"
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailIn;