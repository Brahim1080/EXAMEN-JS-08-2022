const express = require('express');
const { addNewPlace } = require('../models/places');

const router = express.Router();

router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!name || !description) return res.sendStatus(400); // error code '400 Bad request'

  const id = addNewPlace({ name, description });
  return res.json(id);
});

module.exports = router;
