import React from "react";
import "../css/DataDisplay.css";

function DataDisplay({
  id,
  trafficFlow,
  trafficConcentration,
  fromDescription,
  toDescription,
  fromLat,
  fromLong,
  toLat,
  toLong,
}) {
  return (
    <div className="dataDisplay">
      <h4>ID:</h4>
      <p>{id}</p>
      <h4>Traffic Flow:</h4>
      <p>{trafficFlow}</p>
      <h4>Traffic Concentration</h4>
      <p>{trafficConcentration}</p>
      <h4>From (Description)</h4>
      <p>{fromDescription}</p>
      <h4>To (Description)</h4>
      <p>{toDescription}</p>
      <h4>From (Lat)</h4>
      <p>{fromLat}</p>
      <h4>From (Long)</h4>
      <p>{fromLong}</p>
      <h4>To (Lat)</h4>
      <p>{toLat}</p>
      <h4>To (Long)</h4>
      <p>{toLong}</p>
    </div>
  );
}

export default DataDisplay;
