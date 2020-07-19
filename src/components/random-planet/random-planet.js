import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
    console.log("Constructor.");
  }

  componentDidMount() {
    console.log("componentDidMount.");
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      loading: true,
      error: true,
    });
  };

  updatePlanet = () => {
    console.log("Update.");
    const id = Math.floor(Math.random()*23) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    console.log("Component RENDER mount.");
    const { planet, loading, error } = this.state;

    const isSpinner = loading && !error;
    const isPlanetView = !loading && !error;

    const loadingContent = isSpinner ? (
      <Spinner />
    ) : isPlanetView ? (
      <PlanetView planet={planet} />
    ) : error ? (
      <ErrorIndicator />
    ) : null;

    return (
      <div className="random-planet jumbotron rounded p-2 mb-3 d-flex">
        {loadingContent}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="Planet"
      />

      <div className="random-planet-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
