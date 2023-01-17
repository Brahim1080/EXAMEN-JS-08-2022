const { randomUUID } = require('node:crypto');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/places.json');

const PLACE = [
  {
    name: 'nameeee',
    description: 'Descriptionnnnn',
    id: '15222333',
  },
];

function addNewPlace(place) {
  const newPlace = {
    name: place.name,
    description: place.description,
    id: randomUUID(),
  };

  const places = parse(jsonDbPath, PLACE);

  places.push(newPlace);

  serialize(jsonDbPath, places);

  return newPlace.id;
}

module.exports = { addNewPlace };
