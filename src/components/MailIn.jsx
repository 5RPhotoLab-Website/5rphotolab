import '../styles/MailIn.css'
import OrderTemplate from '../assets/Order Template 5R.pdf';

const MailIn = () => {
    return (
        <>
            <div className="main-container">
                <div className="top">
                    <h2 style={{ color: "white", fontSize: "30px" }}>We offer mail-in development, scan, and print services!</h2>

                </div>
                <div className="bottom-mailin">
                    {/* <h2 style={{ color: "white", fontSize: "30px" }}>We offer mail-in development, scan, and print services!</h2> */}
                    <p style={{ fontSize: "20px" }}><b>Not in New York City?</b> We can still develop your film—including all those old disposable cameras you’ve got lying around the house!</p> <br />

                    <p style={{ fontSize: "20px" }}><b>It’s super easy!</b> Mail your film or disposables to <u>31 Washington SQ W STE 3-RC, New York, NY 10011</u>. Please download the template below  and include your contact information 
                    along with details about what you would like done with your film and/or disposables. </p> <br />

                    <p style={{ fontSize: "20px" }}><b>It’s very important</b> to protect your disposables and film in transit. Stick your film in a plastic Ziplock bag. Some people use envelopes with the bubble padding, but we think that a sturdy box with some protective padding inside, secured by solid tape, is the best way.
                        Be sure to indicate on the box “Do not X-Ray.” There is more info on what to say about <a href='https://kodakprofessional.com/photographers/resources' target='_blank'>X-Rays here</a>.</p> <br />

                    <div className="video-container" style={{ marginBottom: "20px" }}>
                        <iframe
                            className='videoDesktop'
                            src="https://www.youtube.com/embed/FLoB1xzZcsc"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="startOrder-container">
                        <button className='startOrder'><a href="https://5rphotolab.square.site/" target='_blank'>Start Your Order</a></button>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <div style={{ marginBottom: "20px" }}>
                            <iframe
                                src={OrderTemplate}
                                title="PDF Viewer"
                                width="600"
                                height="830"
                                style={{ border: "1px solid #ccc" }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailIn;