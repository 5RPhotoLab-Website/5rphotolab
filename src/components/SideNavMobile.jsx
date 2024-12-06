import "../styles/SideNavMobile.css"
import filmyColorOnly from '../assets/filmy-color-only.png';

const SideNavMobile = () => {
    return (
        <>
            <h1 className="sideNavTitleMobile">5R PHOTO LAB</h1>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"><p>HEY THERE</p></div>
            <div className="containerMobile">
                <div className="leftSideMobile">
                    <div className="box4"></div>
                    <div className="box5"><p>MY NAME IS FILMY!</p></div>
                    <div className="box6"></div>
                </div>
                <img className="filmyColorOnly" src={filmyColorOnly} alt="Filmy Color Logo" />
            </div>

            <div className="box7"></div>
            <div className="box8"></div>


        </>
    )
}

export default SideNavMobile;