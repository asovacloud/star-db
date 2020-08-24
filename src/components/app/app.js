import React, { Component } from 'react'

import Header from '../header';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

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
        <div className="stardb-app mt-3">
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={5} />
    
          <PersonList>
            { ({name}) => <span>{name}</span> }
          </PersonList>

          <StarshipList>
            { ({name}) => <span>{name}</span> }
          </StarshipList>

          <PlanetList>
            { ({name}) => <span>{name}</span> }
          </PlanetList>

        </div>
      </ErrorBoundry>
    );
  }
};
