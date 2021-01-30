import React, { useState, useEffect } from "react";
import "../css/Data.css";
import MovementData from "../trafficMovementData.json";
import CounterLocations from "../trafficCounterLocationData.json";

function CollatedData() {
  const [data, setData] = useState([]);

  const counterLocation = data[data.length];

  useEffect(() => {
    setData([
      ...MovementData,
      ...CounterLocations.d2LogicalModel.payloadPublication.measurementSiteTable
        .measurementSiteRecord,
    ]);
    console.log(data);
    console.log(counterLocation);
  }, []);

  return (
    <div className="data">
      {data.map((d) => (
        <ul>
          <li>
            <h4>ID: </h4>
            {d["@id"] || d.measurementSiteReference}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default CollatedData;
