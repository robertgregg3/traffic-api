import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import DataDisplay from "./DataDisplay";
import redDot from "../images/red.png";
import orangeDot from "../images/orange.png";
import greenDot from "../images/green.png";
import { mapStyles } from "./../mapStyles";
import MovementDataJson from "../trafficMovementData.json";
import CounterLocationsJson from "../trafficCounterLocationData.json";

import { fetchMovementData, fetchLocationData } from "../api";

const locationData =
  CounterLocationsJson.d2LogicalModel.payloadPublication.measurementSiteTable
    .measurementSiteRecord;

const movementData =
  MovementDataJson.d2LogicalModel.payloadPublication.siteMeasurements;

function Map() {
  const [selectedData, setSelectedData] = useState(false);
  const [collatedData, setCollatedData] = useState([]);

  // If I had the access to the server I would've been able to use the realtime fetched data...
  // Instead I'm using prefetched static JSON data...
  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);

  const handleIcon = (counter) => {
    if (counter.measuredValue[0].basicDataValue.vehicleFlow >= 20) {
      return greenDot;
    } else if (counter.measuredValue[0].basicDataValue.vehicleFlow >= 10) {
      return orangeDot;
    } else {
      return redDot;
    }
  };

  const renderDisplay = () => {
    if (selectedData) {
      const {
        measuredValue,
        measurementSiteLocation: {
          tpeglinearLocation: { from, to },
        },
      } = selectedData;

      return (
        <div>
          <DataDisplay
            id={selectedData.id}
            trafficFlow={measuredValue[0].basicDataValue.vehicleFlow}
            trafficConcentration={measuredValue[1].basicDataValue.concentration}
            fromDescription={from.name.descriptor.value}
            toDescription={to.name.descriptor.value}
            fromLat={parseFloat(from.pointCoordinates.latitude)}
            toLat={parseFloat(to.pointCoordinates.latitude)}
            fromLong={parseFloat(from.pointCoordinates.longitude)}
            toLong={parseFloat(to.pointCoordinates.longitude)}
          />
        </div>
      );
    }
  };

  if (!collatedData.length) return "Data cannot be fetched.";

  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 55.854434529999814, lng: -4.216974959509279 }}
        defaultOptions={{ styles: mapStyles }}>
        {collatedData.map((counter) => (
          <Marker
            key={counter.id}
            position={{
              lat: parseFloat(
                counter.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.latitude
              ),
              lng: parseFloat(
                counter.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.longitude
              ),
            }}
            onMouseOver={() => {
              setSelectedData(counter);
            }}
            onMouseOut={() => {
              setSelectedData(false);
            }}
            icon={{
              url: handleIcon(counter),
              scaledSize: new window.google.maps.Size(10, 10),
            }}
          />
        ))}
        {renderDisplay()}
      </GoogleMap>
    </div>
  );
}

export default Map;
