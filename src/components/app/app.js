import React, { Component } from 'react'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="app mt-3">
        <Header />
        <RandomPlanet />
  
        <PeoplePage />

        <div className="row mb-3">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPerson}
              getData={this.swapiService.getAllPlanets}
              renderItem={item => (
                <span>{item.name} <button>!</button></span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPerson}
              getData={this.swapiService.getAllStarships}
              renderItem={item => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
  
      </div>
    );
  }
};
