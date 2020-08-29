export default class DummySwapiService {

  _people = [
    {
      id: 1,
      name: 'Bilbo Beggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 2,
      name: 'Frodo Beggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }

  ];

  _planets = [
    {
      id: 1,
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '2.742 km'
    },

    {
      id: 2,
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    },

  ];

  _starship = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  }


}