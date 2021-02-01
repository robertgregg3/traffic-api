import React from "react";
import { Route, Switch } from "react-router-dom";
import MovementData from "./Components/MovementData";
import "./css/app.css";
import CounterLocations from "./Components/CounterLocationData";
import CollatedData from "./Components/CollatedData";
import Map from "./Components/Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Header from "./Components/Header";

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />

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
              loadingElement={<div style={{ height: "70vh" }} />}
              containerElement={<div style={{ height: "70vh" }} />}
              mapElement={<div style={{ height: "70vh" }} />}
            />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
