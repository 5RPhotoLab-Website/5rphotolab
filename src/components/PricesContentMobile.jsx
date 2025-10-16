import '../styles/PricesContentMobile.css';

const PricesContentMobile = () => {
    const colorData = [
        { price: "$19.99", description: "Standard 2-Day Dev&Scan" },
        { price: "$24.99", description: "Standard 2-Day Dev&Scan HI-RES" },
        { price: "$23.99", description: "Standard 2-Day Dev&Print, 24-27 Exp." },
        { price: "$25.99", description: "Standard 2-Day Dev&Print, 36 Exp." },
    ];

    const bwData = [
        { price: "$19.99", description: "Standard 5-Day Dev&Scan" },
        { price: "$24.99", description: "Standard 5-Day Dev&Scan HI-RES" },
        { price: "$21.99", description: "Standard 5-Day Dev&Print, 24-27 Exp." },
        { price: "$23.99", description: "Standard 5-Day Dev&Print, 36 Exp." },
    ];

    const printData = [
        { price: "$07.00", description: "24-27 Exp. (4X6 Prints)" },
        { price: "$09.00", description: "36 Exp. (4X6 Prints)" },
        { price: "$15.00", description: "8X10 Print" },
        { price: "$15.00", description: "8X12 Print" },
    ];

    const moreData = [
        { price: "$29.99", description: "120 Dev&Scan" },
        { price: "$21.99", description: "110 Dev&Scan" },
        { price: "$21.99", description: "APS Dev&Scan" },
        { price: "$20.00", description: "Negatives Scan per Strip" },
        { price: "$05.00", description: "Scan per Slide/Print, 10 Minimum" },
    ];

    const addOnsData = [
        { price: "$45.00", description: "Same-Day 35mm Color Dev&Scan" },
        { price: "$35.00", description: "Next-Day 35mm Color Dev&Scan" }
    ];

    return (
        <>
            <div className="prices">
                <h2 className="prices-title">35mm Color</h2>
                {colorData.map((item, index) => (
                    <div key={index} className={`prices-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="prices-price">{item.price}</div>
                        <div className="prices-description">{item.description}</div>
                    </div>
                ))}
            </div>
            <div className="prices">
                <h2 className="prices-title">35mm B&W</h2>
                {bwData.map((item, index) => (
                    <div key={index} className={`prices-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="prices-price">{item.price}</div>
                        <div className="prices-description">{item.description}</div>
                    </div>
                ))}
            </div>
            <div className="prices">
                <h2 className="prices-title">Print Set</h2>
                {printData.map((item, index) => (
                    <div key={index} className={`prices-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="prices-price">{item.price}</div>
                        <div className="prices-description">{item.description}</div>
                    </div>
                ))}
            </div>
            <div className="prices">
                <h2 className="prices-title">More</h2>
                {moreData.map((item, index) => (
                    <div key={index} className={`prices-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="prices-price">{item.price}</div>
                        <div className="prices-description">{item.description}</div>
                    </div>
                ))}
            </div>
            <div className="prices">
                <h2 className="prices-addons-title">Add-ons</h2>
                {addOnsData.map((item, index) => (
                    <div key={index} className={`prices-row${index > 0 ? "-" + (index + 1) : ""}`}>
                        <div className="prices-addons-price">{item.price}</div>
                        <div className="prices-description">{item.description}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PricesContentMobile;