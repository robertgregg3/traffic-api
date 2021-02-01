import React, { useState, useEffect } from "react";
import "../css/Data.css";
import MovementDataJson from "../trafficMovementData.json";
import CounterLocationsJson from "../trafficCounterLocationData.json";
// import { fetchMovementData, fetchLocationData } from "../api";

const locationData =
  CounterLocationsJson.d2LogicalModel.payloadPublication.measurementSiteTable
    .measurementSiteRecord;

const movementData =
  MovementDataJson.d2LogicalModel.payloadPublication.siteMeasurements;

function CollatedData() {
  const [collatedData, setCollatedData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    // const movementData = await fetchMovementData();
    // const locationData = await fetchLocationData();

    const collatedData = locationData
      .map((locationPoint) => {
        const movementDetails = movementData.find(
          (movementPoint) =>
            movementPoint.measurementSiteReference === locationPoint["@id"]
        );

        if (movementDetails) {
          return {
            id: movementDetails.measurementSiteReference,
            measurementSiteLocation: locationPoint.measurementSiteLocation,
            measuredValue: movementDetails.measuredValue,
          };
        }
      })
      .filter(Boolean);

    setCollatedData(collatedData);
    // };
  }, []);

  return (
    <div className="data">
      {collatedData &&
        collatedData.map((data) => (
          <ul key={data.id} className="data__container">
            <li>
              <h4>ID: </h4>
              {data.id}
            </li>
            <li>
              <h4>Measurement Site Reference:</h4>
              {data.measurementSiteReference}
            </li>
            <li>
              <h4>(From) Latitude: </h4>
              {
                data.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.latitude
              }
            </li>
            <li>
              <h4>(From) Longitude: </h4>
              {
                data.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.longitude
              }
            </li>
            <li>
              <h4>From: </h4>
              {
                data.measurementSiteLocation.tpeglinearLocation.to.name
                  .descriptor.value
              }
            </li>
            <li>
              <h4>(To) Latitude: </h4>
              {
                data.measurementSiteLocation.tpeglinearLocation.from
                  .pointCoordinates.latitude
              }
            </li>
            <li>
              <h4>(To) Longitude: </h4>
              {
                data.measurementSiteLocation.tpeglinearLocation.from
                  .pointCoordinates.longitude
              }
            </li>
            <li>
              <h4>To: </h4>
              {
                data.measurementSiteLocation.tpeglinearLocation.from.name
                  .descriptor.value
              }
            </li>
            <li>
              <h4>Measurement Time Default:</h4>
              {data.measurementTimeDefault}
            </li>
            <li>
              <h4>Traffic Flow: </h4>
              {!data.measuredValue
                ? ""
                : data.measuredValue[0].basicDataValue.vehicleFlow}
            </li>
            <li>
              <h4>Traffic Concentration: </h4>
              {!data.measuredValue
                ? ""
                : data.measuredValue[1].basicDataValue.concentration}
            </li>
          </ul>
        ))}
    </div>
  );
}

export default CollatedData;
