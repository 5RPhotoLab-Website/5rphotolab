import '../styles/PricesContent.css';

const PricesContent = () => {
    const colorData = [
        { price: "$19.99", description: "Standard Two-Day Dev/Scan" },
        { price: "$24.99", description: "Two-Day Dev/Scan HI-RES" },
        { price: "$21.99", description: "Dev/Print, 24-27 Exp., No Scans" },
        { price: "$23.99", description: "Dev/Print, 36 Exp., No Scans" },
    ];

    const bwData = [
        { price: "$19.99", description: "Dev/Scan" },
        { price: "$29.99", description: "Dev + HI-RES Scan" },
        { price: "$21.99", description: "Dev/Print, 24-27 Exp., No Scans" },
        { price: "$23.99", description: "Dev/Print, 36 Exp., No Scans" },
    ];

    const printData = [
        { price: "$07.00", description: "24-27 Exp. (4X6 Prints)" },
        { price: "$09.00", description: "36 Exp. (4X6 Prints)" },
        { price: "$15.00", description: "8X10 Print" },
        { price: "$15.00", description: "8X12 Print" },
    ];

    const moreData = [
        { price: "$29.99", description: "120 Dev/Scan" },
        { price: "$21.99", description: "110 Dev/Scan" },
        { price: "$21.99", description: "APS Dev&Scan" },
        { price: "$20.00", description: "Negatives Scan per Strip" },
        { price: "$05.00", description: "Slide/Print Scan, 10 Minimum" },
    ];

    const rushData = [
        { price: "$45.00", description: "Same-Day 35mm Color Dev/Scan" },
        { price: "$35.00", description: "Next-Day 35mm Color Dev/Scan" }
    ];

    return (
        <>
            <section className="prices-list">
                <div className="prices-list-top">
                    <PricesTopListItem title="35mm Color" data={colorData} />
                    <PricesTopListItem title="35mm B&W" data={bwData} />
                    <PricesTopListItem title="Print set" data={printData} />
                </div>
                <div className="prices-list-bottom">
                    <MoreList title="More" data={moreData} />
                    <RushList title="OTHER services" data={rushData} />
                </div>
            </section>
        </>
    )

}

function PricesTopListItem({ title, data }) {
    return (
        <div className="prices-top-item">
            <h2 className="prices-top-item-title">{title}</h2>
            {data.map((item, index) => (
                <div key={index} className={`prices-top-item-row${index > 0 ? "-" + (index + 1) : ""}`}>
                    <div className="prices-price">{item.price}</div>
                    <div className="prices-description">{item.description}</div>
                </div>
            ))}
        </div>
    );
}

function MoreList({ title, data }) {
    return (
      <div className="prices-more-list">
        <h2 className="prices-more-title">{title}</h2>
        {data.map((item, index) => (
          <div key={index} className={`prices-more-item-row${index > 0 ? "-" + (index + 1) : ""}`}>
            {item.price && <div className="prices-price">{item.price}</div>}
            <div className="prices-description">{item.description}</div>
          </div>
        ))}
      </div>
    );
  }

  function RushList({ title, data }) {
    return (
      <div className="rush-list">
        <h2 className="rush-title">{title}</h2>
        {data.map((item, index) => (
          <div key={index} className={`rush-item-row${index > 0 ? "-" + (index + 1) : ""}`}>
            {item.price && <div className="rush-price">{item.price}</div>}
            <div className="prices-description">{item.description}</div>
          </div>
        ))}
      </div>
    );
  }

export default PricesContent;