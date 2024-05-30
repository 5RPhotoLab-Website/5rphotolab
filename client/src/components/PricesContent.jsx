import '../styles/PricesContent.css';

const PricesContent = () => {
    const colorData = [
        { price: "$15.99", description: "Dev/Scan" },
        { price: "$22.99", description: "Dev/Scan/Print, 24-27 exp." },
        { price: "$24.99", description: "Dev/Scan/Print, 36 exp." },
        { price: "$17.99", description: "Dev/Print, 24-27 exp., no scans" },
        { price: "$19.99", description: "Dev/Print, 36 exp., no scans" },
        { price: "$24.99", description: "Dev + High res scan" },
    ];

    const bwData = [
        { price: "$19.99", description: "Dev/Scan" },
        { price: "$26.99", description: "Dev/Scan/Print, 24-27 exp." },
        { price: "$28.99", description: "Dev/Scan/Print, 36 exp." },
        { price: "$21.99", description: "Dev/Print, 24-27 exp., no scans" },
        { price: "$23.99", description: "Dev/Print, 36 exp., no scans" },
        { price: "$29.99", description: "Dev + High res scan" },
    ];

    const printData = [
        { price: "$07.00", description: "24-27 exp. (4X6 prints)" },
        { price: "$09.00", description: "36 exp. (4X6 prints)" },
        { price: "$12.00", description: "6X9 print" },
        { price: "$12.00", description: "8X10 print" },
        { price: "$15.00", description: "8X12 print" },
    ];

    const moreData = [
        { price: "$29.99", description: "120 Dev/Scan" },
        { price: "$19.99", description: "110 Dev/Scan" },
        { price: "$20.00", description: "Negatives Scan per strip" },
        { price: "$05.00", description: "Slide/print scan, 10 minimum" },
    ];

    const rushData = [
        { price: "$45.00", description: "Same-day 35mm Color Dev/Scan" },
        { price: "$35.00", description: "Next-day 35mm Color Dev/Scan" },
        { price: "$21.99", description: "Two-day 35mm Color Dev/Scan" }
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
                    <RushList title="RUSH services" data={rushData} />
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