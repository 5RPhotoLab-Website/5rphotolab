import '../styles/OthersContentMobile.css';

const OthersContentMobile = () => {
    const sprocketsData = [
        { price: "$24.99", description: "35mm Color Dev&Scan" },
        { price: "$29.99", description: "35mm Color Dev&Scan + TIFFS" },
        { price: "$29.99", description: "35mm B&W Dev&Scan" },
        { price: "$34.99", description: "35mm B&W Dev&Scan + TIFFS" },
    ];

    const panoramicData = [
        { price: "$29.99", description: "35mm Color Dev&Scan" },
        { price: "$34.99", description: "35mm Color Dev&Scan + TIFFS" },
        { price: "$33.99", description: "35mm B&W Dev&Scan" },
        { price: "$38.99", description: "35mm B&W Dev&Scan + TIFFS" },
    ];

    const halfFrame2dayData = [
        { price: "$27.99", description: "35mm Color Dev&Scan, Individuals" },
        { price: "$23.99", description: "35mm Color Dev&Scan, Diptychs" }
    ];

    const halfFrame5dayData = [
        { price: "$27.99", description: "35mm B&W Dev&Scan, Individuals" },
        { price: "$23.99", description: "35mm B&W Dev&Scan, Diptychs" }
    ];
    return (
        <>
            <div className="others">
                <h2 className="others-title">W/ Sprockets (HI-RES)</h2>
                {sprocketsData.map((item, index) => (
                    <div key={index} className={`others-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="price">{item.price}</div>
                        <div className="description">{item.description}</div>
                    </div>
                ))}
            </div>
            <div className="others">
                <h2 className="others-title">X-Panoramic Wide Exposure<br/>(HI-RES)</h2>
                {panoramicData.map((item, index) => (
                    <div key={index} className={`others-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="price">{item.price}</div>
                        <div className="description">{item.description}</div>
                    </div>
                ))}
            </div>
            <div className="others">
                <h2 className="others-title">Half-Frame Standard 2-Day Color</h2>
                {halfFrame2dayData.map((item, index) => (
                    <div key={index} className={`others-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="price">{item.price}</div>
                        <div className="description">{item.description}</div>
                    </div>
                ))}
            </div>
            <div className="others">
                <h2 className="others-title">Half-Frame Standard 5-Day B&W</h2>
                {halfFrame5dayData.map((item, index) => (
                    <div key={index} className={`others-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="price">{item.price}</div>
                        <div className="description">{item.description}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OthersContentMobile;