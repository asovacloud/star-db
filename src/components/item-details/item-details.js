import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    isSpinner: false,
    image: null,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) return;

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          isSpinner: true,
          image: getImageUrl(item)
        })
      })
  }

  render() {

    const {
      item,
      isSpinner,
      image,
    } = this.state;

    if (!item) {
      return <span>Select an item form a list.</span>
    }

    const loadingContent = isSpinner ? (
      <PersonView
        image={image}
        person={item}
        children={
          React.Children.map(this.props.children,
          child => {
            return React.cloneElement(child, { item });
          })
        } />
    ) : <Spinner />

    return (
      <div className="item-details p-2 d-flex card">{loadingContent}</div>
    );
  }
}

const PersonView = ({person, image, children}) => {
  const {
    name,
  } = person;

  return (
    <>
      <img
        className="item-image"
        src={image}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="card-body-list list-group list-group-flush">
          { children }
        </ul>
      </div>
    </>
  );
}