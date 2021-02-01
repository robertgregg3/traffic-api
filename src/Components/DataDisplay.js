import React from "react";
import "../css/DataDisplay.css";

const DataDisplay = ({
  id,
  trafficFlow,
  trafficConcentration,
  fromDescription,
  toDescription,
  fromLat,
  fromLong,
  toLat,
  toLong,
}) => {
  const DataItem = ({ name, value }) => {
    return (
      <div className="dataDisplay__item">
        <h4>{name}:</h4>
        <p>{value}</p>
      </div>
    );
  };

  return (
    <div className="dataDisplay">
      <DataItem name="ID" value={id} />
      <DataItem name="Traffic Flow" value={trafficFlow} />
      <DataItem name="Traffic Concentration" value={trafficConcentration} />
      <DataItem name="fromDescription" value={fromDescription} />
      <DataItem name="toDescription" value={toDescription} />
      <DataItem name="fromLat" value={fromLat} />
      <DataItem name="fromLong" value={fromLong} />
      <DataItem name="toLat" value={toLat} />
      <DataItem name="toLong" value={toLong} />
    </div>
  );
};

export default DataDisplay;
