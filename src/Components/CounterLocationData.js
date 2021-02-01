import React from "react";
import "../css/Data.css";
import CounterLocations from "../trafficCounterLocationData.json";

function CounterLocation() {
  const location =
    CounterLocations.d2LogicalModel.payloadPublication.measurementSiteTable
      .measurementSiteRecord;

  return (
    <div className="data">
      {location.map((l) => (
        <ul key={l["@id"]} className="data__container">
          <li>
            <h4>ID: </h4>
            {l["@id"]}
          </li>
          <li>
            <h4>(From) Latitude: </h4>
            {
              l.measurementSiteLocation.tpeglinearLocation.to.pointCoordinates
                .latitude
            }
          </li>
          <li>
            <h4>(From) Longitude: </h4>
            {
              l.measurementSiteLocation.tpeglinearLocation.to.pointCoordinates
                .longitude
            }
          </li>
          <li>
            <h4>From: </h4>
            {
              l.measurementSiteLocation.tpeglinearLocation.to.name.descriptor
                .value
            }
          </li>
          <li>
            <h4>(To) Latitude: </h4>
            {
              l.measurementSiteLocation.tpeglinearLocation.from.pointCoordinates
                .latitude
            }
          </li>
          <li>
            <h4>(To) Longitude: </h4>
            {
              l.measurementSiteLocation.tpeglinearLocation.from.pointCoordinates
                .longitude
            }
          </li>
          <li>
            <h4>To: </h4>
            {
              l.measurementSiteLocation.tpeglinearLocation.from.name.descriptor
                .value
            }
          </li>
        </ul>
      ))}
    </div>
  );
}

export default CounterLocation;
