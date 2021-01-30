import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MovementData from "./Components/MovementData";
import "./css/app.css";
import CounterLocations from "./Components/CounterLocation";
import CollatedData from "./Components/CollatedData";

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
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
