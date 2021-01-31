import React, { useState } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import CounterLocations from "../trafficCounterLocationData.json";
import DataDisplay from "./DataDisplay";
import redDot from "../images/redDot.svg";
import { mapStyles } from "./../mapStyles";

function Map() {
  const [selectedData, setSelectedData] = useState(false);

  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 55.854434529999814, lng: -4.216974959509279 }}
        defaultOptions={{ styles: mapStyles }}>
        {CounterLocations.d2LogicalModel.payloadPublication.measurementSiteTable.measurementSiteRecord.map(
          (counter) => (
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
              //   icon={{
              //     url: redCar,
              //     scaledSize: new window.google.maps.Size(15, 15),
              //   }}
            />
          )
        )}
        {selectedData && (
          <div>
            <DataDisplay
              id={selectedData["@id"]}
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
