const express = require('express');
const { addNewUser, addPlaceToFavorite } = require('../models/users');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const mail = req?.body?.mail?.length !== 0 ? req.body.mail : undefined;

  if (!name || !mail) return res.sendStatus(400); // error code '400 Bad request'

  const id = addNewUser({ name, mail });
  if (id === -1) return res.sendStatus(409);
  return res.json(id);
});

router.patch('/addFavourite', (req, res) => {
  const idUser = req?.body?.user?.length !== 0 ? req.body.user : undefined;
  const idPlace = req?.body?.place?.length !== 0 ? req.body.place : undefined;

  if (!idUser || !idPlace) return res.sendStatus(400); // error code '400 Bad request'

  const user = addPlaceToFavorite(idPlace, idUser);
  if (user === -1) return res.sendStatus(403);
  return res.json(user);
});

module.exports = router;
