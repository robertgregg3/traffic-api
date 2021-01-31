import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/movement-data">
        <button className="header__button">Traffic Movement Data</button>
      </Link>
      <Link to="/counter-location-data">
        <button className="header__button">Counter Location Data</button>
      </Link>
      <Link to="/collated-data">
        <button className="header__button">Collated Data</button>
      </Link>
      <Link to="/data-map">
        <button className="header__button">Map View</button>
      </Link>
    </div>
  );
}

export default Header;
