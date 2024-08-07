import * as React from "react";
import '../styles/OthersContent.css';

const OthersContent = () => {
  const sprocketsData = [
    { price: "$20.99", description: "35mm Color Scan" },
    { price: "$29.99", description: "35mm B&W Dev/Scan" },
  ];

  const panoramicData = [
    { price: "$29.99", description: "35mm Color Scan" },
    { price: "$33.99", description: "35mm B&W Dev/Scan" },
  ];

  const retoData = [
    { price: "$46.99", description: "35mm Color Scan" },
    { price: "$50.99", description: "35mm B&W Dev/Scan" },
  ];

  const halfFrameData = [
    { price: "$27.99", description: "35mm Color Dev/Scan, Individual Photos" },
    { price: "$23.99", description: "35mm Color Dev/Scan, Diptych" },
    { price: "$27.99", description: "35mm B&W Dev/Scan" }
  ];

  return (
    <>
      <section className="others-list">
        <div className="others-list-top">
          <TopListItem
            title="Sprockets"
            data={sprocketsData}
          />
          <TopListItem
            title="Panoramic"
            data={panoramicData}
          />
          <TopListItem
            title="Reto 3-D"
            data={retoData}
          />
        </div>
        <div className="others-list-bottom">
          <HalfFrameList
            title="Half-Frame Standard Two-Day"
            data={halfFrameData}
          />
          <div className="more-list">
            <h2 className="more-title">More</h2>
            <p className="more-description">
              Archival restoration{" "}
              <span className="highlight">$15.99</span> processing fee,
              then estimated cost
              <br />
              Commercial editing <span className="highlight">$150+/hour</span>
              <br />
              After-hours processing <span className="highlight">$200 </span>
              starting open fee, plus per-roll costs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function TopListItem({ title, data }) {
  return (
    <div className="top-item">
      <h2 className="top-item-title">{title}</h2>
      {data.map((item, index) => (
        <div key={index} className={`top-item-row${index > 0 ? "-" + (index + 1) : ""}`}>
          <div className="price">{item.price}</div>
          <div className="description">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

function HalfFrameList({ title, data }) {
  return (
    <div className="half-frame-list">
      <h2 className="half-frame-title">{title}</h2>
      {data.map((item, index) => (
        <div key={index} className={`half-frame-item-row${index > 0 ? "-" + (index + 1) : ""}`}>
          <div className="price">{item.price}</div>
          <div className="description">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default OthersContent;