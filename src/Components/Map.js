import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import CounterLocations from "../trafficCounterLocationData.json";
import DataDisplay from "./DataDisplay";
import redDot from "../images/red.png";
import orangeDot from "../images/orange.png";
import greenDot from "../images/green.png";
import { mapStyles } from "./../mapStyles";
import MovementDataJson from "../trafficMovementData.json";
import CounterLocationsJson from "../trafficCounterLocationData.json";

function Map() {
  const [selectedData, setSelectedData] = useState(false);
  const [collatedData, setCollatedData] = useState([]);

  useEffect(() => {
    getCollatedData(locationData, MovementDataJson);
  }, []);

  const locationData =
    CounterLocationsJson.d2LogicalModel.payloadPublication.measurementSiteTable
      .measurementSiteRecord;

  const getCollatedData = (locationData, MovementDataJson) => {
    const newData = locationData
      .flat()
      .map((m, i) => Object.assign(m, MovementDataJson[i]));
    setCollatedData(newData);
    console.log(collatedData[0]);
  };

  const handleIcon = (counter) => {
    if (
      counter.measuredValue &&
      counter.measuredValue[0].basicDataValue.vehicleFlow >= 20
    ) {
      return greenDot;
    } else if (
      counter.measuredValue &&
      counter.measuredValue[0].basicDataValue.vehicleFlow >= 10
    ) {
      return orangeDot;
    } else {
      return redDot;
    }
  };

  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 55.854434529999814, lng: -4.216974959509279 }}
        defaultOptions={{ styles: mapStyles }}>
        {collatedData.map((counter) => (
          <Marker
            key={counter["@id"]}
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
              scaledSize: new window.google.maps.Size(15, 15),
            }}
          />
        ))}
        {selectedData && (
          <div>
            <DataDisplay
              id={selectedData["@id"]}
              trafficFlow={
                !selectedData.measuredValue
                  ? ""
                  : selectedData.measuredValue[0].basicDataValue.vehicleFlow
              }
              trafficConcentration={
                !selectedData.measuredValue
                  ? ""
                  : selectedData.measuredValue[1].basicDataValue.concentration
              }
              fromDescription={
                selectedData.measurementSiteLocation.tpeglinearLocation.from
                  .name.descriptor.value
              }
              toDescription={
                selectedData.measurementSiteLocation.tpeglinearLocation.to.name
                  .descriptor.value
              }
              fromLat={parseFloat(
                selectedData.measurementSiteLocation.tpeglinearLocation.from
                  .pointCoordinates.latitude
              )}
              toLat={parseFloat(
                selectedData.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.latitude
              )}
              fromLong={parseFloat(
                selectedData.measurementSiteLocation.tpeglinearLocation.from
                  .pointCoordinates.longitude
              )}
              toLong={parseFloat(
                selectedData.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.longitude
              )}
            />
          </div>
        )}

        {/* {selectedData && (
          <InfoWindow
            position={{
              lat: parseFloat(
                selectedData.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.latitude
              ),
              lng: parseFloat(
                selectedData.measurementSiteLocation.tpeglinearLocation.to
                  .pointCoordinates.longitude
              ),
            }}>
            <div>
              <h6>To: </h6>
              {
                selectedData.measurementSiteLocation.tpeglinearLocation.from
                  .name.descriptor.value
              }
            </div>
          </InfoWindow>
        )} */}
      </GoogleMap>
    </div>
  );
}

export default Map;
