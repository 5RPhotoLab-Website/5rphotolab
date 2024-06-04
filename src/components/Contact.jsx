import contactPage from '../assets/contactPage.png'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <>
            <img className="contact-page" src={contactPage} alt="Contact Information" useMap='#image-map' />

            <map name="image-map">
                <area target="_blank" alt="@5RPhotoLab" title="@5RPhotoLab" href="https://www.tiktok.com/@5rphotolab" coords="404,313,147,363" shape="rect" />
                <area target="_blank" alt="infor@5rphotolab.com" title="infor@5rphotolab.com" href="mailto:info@5rphotolab.com" coords="477,599,852,535" shape="rect" />
                <area target="_blank" alt="646-319-4106" title="646-319-4106" href="tel:+16463194106" coords="885,271,1138,222" shape="rect" />
            </map>
        </>
    )
}

export default Contact;