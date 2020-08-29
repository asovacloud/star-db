import React, { Component } from 'react'

import Header from '../header';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components';

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
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app mt-3">
            <Header />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={5} />
      
            <PersonList />
            <StarshipList />
            <PlanetList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
