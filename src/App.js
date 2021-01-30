import React from "react";
import "./css/app.css";
import Data from "./data.json";

function App() {
  console.log(Data);
  return (
    <React.Fragment>
      <div className="app">
        <div className="movementData">
          {Data.map((d, i) => {
            return (
              <>
                <h4 key={Data[i].measurementSiteReference}>
                  Data is: {Data[i].measurementSiteReference}
                </h4>
              </>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
