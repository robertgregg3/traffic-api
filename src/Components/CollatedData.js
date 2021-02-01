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

function CollatedData({ sortColumn, onSort }) {
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
        } else {
          return null;
        }
      })
      .filter(Boolean);

    setCollatedData(collatedData);
    // };
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Traffic Flow</th>
          <th>Traffic Concentration</th>
          <th>(From) Description</th>
          <th>(To) Description</th>
          <th>(From) Lat</th>
          <th>(To) Lat</th>
          <th>(From) Long</th>
          <th>(To) Long</th>
        </tr>
      </thead>
      <tbody>
        {collatedData.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.measuredValue[0].basicDataValue.vehicleFlow}</td>
            <td>{data.measuredValue[1].basicDataValue.concentration}</td>
            <td>
              {
                data.measurementSiteLocation.tpeglinearLocation.from.name
                  .descriptor.value
              }
            </td>
            <td>
              {
                data.measurementSiteLocation.tpeglinearLocation.to.name
                  .descriptor.value
              }
            </td>
            <td>
              {
                data.measurementSiteLocation.tpeglinearLocation.from
                  .pointCoordinates.latitude
              }
            </td>
            <td>
              {
                data.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.latitude
              }
            </td>
            <td>
              {
                data.measurementSiteLocation.tpeglinearLocation.from
                  .pointCoordinates.longitude
              }
            </td>
            <td>
              {
                data.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.longitude
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CollatedData;
