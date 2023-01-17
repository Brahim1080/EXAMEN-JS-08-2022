const { randomUUID } = require('node:crypto');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/users.json');
const jsonDbPathPlace = path.join(__dirname, '/../data/places.json');

const DEFAULT_USERS = [
  {
    name: 'NAME',
    mail: 'TESTTT',
    id: '1444444444444',
    favourites: [],
  },
];
function addNewUser(user) {
  const newUser = {
    name: user.name,
    mail: user.mail,
    id: randomUUID(),
    favourites: [],
  };

  const users = parse(jsonDbPath, DEFAULT_USERS);

  let mailInvalid = false;
  users.forEach((userfor) => {
    if (userfor.mail === user.mail) {
      mailInvalid = true;
    }
  });
  if (mailInvalid) return -1;

  users.push(newUser);

  serialize(jsonDbPath, users);

  return newUser.id;
}

function addPlaceToFavorite(idPlace, idUser) {
  const users = parse(jsonDbPath, DEFAULT_USERS);
  const places = parse(jsonDbPathPlace);

  const indexUserFound = users.findIndex((user) => user.id === idUser);
  const indexPlaceFound = places.findIndex((place) => place.id === idPlace);
  // eslint-disable-next-line no-console
  console.log({ indexUserFound, indexPlaceFound });
  if (indexUserFound < 0 || indexPlaceFound < 0) return -1;

  users[indexUserFound].favourites.push(idPlace);
  serialize(jsonDbPath, users);

  return users[indexUserFound];
}

module.exports = { addNewUser, addPlaceToFavorite };
