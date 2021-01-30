import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MovementData from "./Components/MovementData";
import "./css/app.css";
import CounterLocations from "./Components/CounterLocation";
import CollatedData from "./Components/CollatedData";
import Map from "./Components/Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Link to="/movement-data">
          <button>Traffic Movement Data</button>
        </Link>
        <Link to="/counter-location-data">
          <button>Counter Location Data</button>
        </Link>
        <Link to="/collated-data">
          <button>Collated Data</button>
        </Link>
        <Link to="/data-map">
          <button>Data Map</button>
        </Link>

        <Switch>
          <Route path="/movement-data">
            <MovementData />
          </Route>
          <Route path="/counter-location-data">
            <CounterLocations />
          </Route>
          <Route path="/collated-data">
            <CollatedData />
          </Route>
          <Route path="/data-map">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBoc_0417ZN1wx6QkdJOCFSwMQwmD4LBbE`}
              loadingElement={<div style={{ height: "100vh" }} />}
              containerElement={<div style={{ height: "400px" }} />}
              mapElement={<div style={{ height: "100vh" }} />}
            />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
