import React, { useEffect } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import CounterLocations from "../trafficCounterLocationData.json";

function Map() {
  useEffect(() => {
    console.log(
      CounterLocations.d2LogicalModel.payloadPublication.measurementSiteTable
        .measurementSiteRecord[1].measurementSiteLocation.tpeglinearLocation.to
        .pointCoordinates.longitude
    );
  }, []);

  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 55.854434529999814, lng: -4.216974959509279 }}
      />

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
          />
        )
      )}
    </div>
  );
}

export default Map;
