import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';
import SwapiServiceContext from '../swapi-service-context';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from '../pages';
import {
  StarshipDetails
} from '../sw-components';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceContext.Provider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app mt-3">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route  path='/'
                      render={() => <h1>Welcom to my App, bro.</h1>}
                      exact />
              <Route  path='/people'
                      render={() => <h2>People</h2>}
                      exact
                      />
              <Route path='/people' component={ PeoplePage } />
              <Route path='/planets' component={ PlanetsPage } />
              <Route  path='/starships'
                      component={ StarshipsPage }
                      exact />
              <Route  path='/starships/:id'
                      render={({match}) => {
                        const { id } = match.params;
                        return <StarshipDetails itemId={id} />
                      }} />

            </div>
          </Router>
          
        </SwapiServiceContext.Provider>
      </ErrorBoundry>
    );
  }
};
