import React, { Component } from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    isSpinner: false,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({
          person,
          isSpinner: true
        })
      })
  }

  render() {

    console.log("personId: ", this.props.personId);

    if (!this.state.person) {
      return <span>Select a person form a list.</span>
    }

    const { person, isSpinner } = this.state;

    const loadingContent = isSpinner ? <PersonView person={person} /> : <Spinner />

    return (
      <div className="preson-details p-2 d-flex card">{loadingContent}</div>
    );
  }
}

const PersonView = person => {
  const {
    id,
    name,
    gender,
    birthYear,
    eyeColor
  } = person.person;

  return (
    <>
      <img
        className="preson-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="card-body-list list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
}