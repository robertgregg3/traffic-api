import axios from "axios";

const MOVEMENT_API_URL =
  "https://gcc.azure-api.net/traffic/movement?format=json";
const LOCATION_API_URL =
  "https://gcc.azure-api.net/traffic/locations?format=json";

export const fetchMovementData = async () => {
  const movementData = await axios.get(MOVEMENT_API_URL);

  return movementData;
};

export const fetchLocationData = async () => {
  const locationData = await axios.get(LOCATION_API_URL);

  return locationData;
};

// Access to XMLHttpRequest at has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// front end needs to be hosted on the same as the backend.
// https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios-in-react-web-throwing-error-in-ch
