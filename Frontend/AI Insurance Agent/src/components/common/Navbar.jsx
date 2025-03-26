import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="part1">
        <li>Cars |</li>
        <li>Trucks&Machinery |</li>
        <li>Motorcycles |</li>
        <li>General Goods |</li>
        <li>Buses,Caravans&Motorhomes |</li>
        <li>Boats&Marine |</li>
      </div>
      <div className="part2">
        <div className="part2Left">
          <img src="src/assets/capture.PNG" alt="logo" />
        </div>
        <div className="part2Right">
          <li>Login</li>
          <li>Find Us</li>
        </div>
      </div>
      <div className="part3">
        <div className="blueLeft">
          <li>Find a car</li>
          <li>How to Buy</li>
          <li>Sell your car</li>
          <li>Finance&Insurance</li>
        </div>
        <div className="blueRight">
          <li>Auctions</li>
          <li>Service&Info</li>
        </div>
      </div>
    </nav>
  );
}
