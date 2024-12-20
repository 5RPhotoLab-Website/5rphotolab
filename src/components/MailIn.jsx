import '../styles/MailIn.css'

const MailIn = () => {
    return (
        <>
            <div className="main-container-mailIn">
                <div className="top">

                </div>
                <div className="bottom">
                    <h2 style={{ color: "white", fontSize: "30px" }}>We offer mail-in development, scan, and print services!</h2>
                    <p style={{fontSize:"20px"}}><b>Not in New York City?</b> We can still develop your film—including all those old disposable cameras you’ve got lying around the house!</p> <br />

                    <p style={{fontSize:"20px"}}><b>It’s super easy!</b> Mail your film or disposables to <u>31 Washington Square West, Suite 5-RC, New York NY, 10011</u>. Please include a note
                        with your contact information and what you would like done with your film and/or disposables. Would you like digital scans only? Do you want prints, too? Do you want your negatives back?</p> <br />

                    <p style={{fontSize:"20px"}}><b>It’s very important</b> to protect your disposables and film in transit. Stick your film in a plastic Ziplock bag. Some people use envelopes with the bubble padding, but we think that a sturdy box with some protective padding inside, secured by solid tape, is the best way.
                        Be sure to indicate on the box “Do not X-Ray.” There is more info on what to say about <a href='https://kodakprofessional.com/photographers/resources' target='_blank'>X-Rays here</a>.</p> <br />

                    <p style={{fontSize:"20px"}}><b>We will email an invoice</b> when we get your order. Once payment is processed, we will go ahead and start on your lovely pictures!
                        If you want your negatives back, or if you are ordering prints, return shipping starts at $10. </p> <br />
                </div>
            </div>
        </>
    )
}

export default MailIn;