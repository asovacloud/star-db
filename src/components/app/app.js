import React, { Component } from 'react'

import Header from '../header';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";
import ItemList from "../item-list";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

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

    const {
      getAllPeople,
      getAllPlanets,
    } = this.swapiService;

    return (
      <ErrorBoundry>
        <div className="stardb-app mt-3">
          <Header />
    
          <ItemList
            getData={getAllPeople}
            onItemSelected={() => {}}
          >
            { ({name}) => <span>{name}</span> }
          </ItemList>

          <ItemList
            getData={getAllPlanets}
            onItemSelected={() => {}}
          >
            { ({name}) => <span>{name}</span> }
          </ItemList>
    
        </div>
      </ErrorBoundry>
    );
  }
};
