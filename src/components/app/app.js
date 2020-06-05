import React from 'react'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  return (
    <div className="app mt-3">
      <Header />
      <RandomPlanet />

      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>


    </div>
  );
};

export default App;
