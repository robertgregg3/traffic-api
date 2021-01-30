import React from "react";
import "../css/Data.css";
import movementData from "../trafficMovementData.json";

function MovementData() {
  return (
    <div className="data">
      <div className="data">
        {movementData.map((data) => (
          <ul className="data__container" key={data.measurementSiteReference}>
            <li>
              <h4>Measurement Site Reference (ID):</h4>
              {data.measurementSiteReference}
            </li>
            <li>
              <h4>Measurement Time Default:</h4>
              {data.measurementTimeDefault}
            </li>
            <li>
              <h4>Measured Value (Data Value): </h4>
              {data.measuredValue[0].basicDataValue["@xsi$type"]}
            </li>
            <li>
              <h4>Measured Value (Data Value): </h4>
              {data.measuredValue[0].basicDataValue.vehicleFlow}
            </li>
            <li>
              <h4>Measured Value (Data Value): </h4>
              {data.measuredValue[1].basicDataValue["@xsi$type"]}
            </li>
            <li>
              <h4>Measured Value (Data Value): </h4>
              {data.measuredValue[1].basicDataValue.concentration}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default MovementData;
