import { GoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 55.854434529999814, lng: -4.216974959509279 }}
    />
  );
}

export default Map;
