import React, { Component } from 'react'

import './item-list.css';

export default class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item px-3 py-2">Luck Skywalker</li>
        <li className="list-group-item px-3 py-2">Dard Vader</li>
        <li className="list-group-item px-3 py-2">R2 - D2</li>
      </ul>
    );
  }
};
