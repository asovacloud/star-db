import React, { Component } from 'react'

import Header from '../header';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
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
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <div className="app mt-3">
        <Header />
  
        <Row
          left={personDetails}
          right={starshipDetails}
        />
  
      </div>
    );
  }
};
