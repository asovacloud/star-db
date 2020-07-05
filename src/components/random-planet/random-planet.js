import React from "react";

import "./random-planet.css";

const RandomPlanet = () => {
  return (
    <div className="random-planet jumbotron rounded p-2 mb-3 d-flex">
      <img
        className="planet-image"
        src="https://starwars-visualguide.com/assets/img/planets/8.jpg"
        alt="Planet"
      />

      <div className="random-planet-body">
        <h4>Planet Name</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>123123</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>43</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation</span>
            <span>3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanet;
