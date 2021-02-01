import React, { useEffect } from "react";
import "../css/Data.css";
import MovementDataJson from "../trafficMovementData.json";

const movementData =
  MovementDataJson.d2LogicalModel.payloadPublication.siteMeasurements;

function MovementData() {
  useEffect(() => {
    console.log(movementData[0]);
  });

  return (
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
  );
}

export default MovementData;
