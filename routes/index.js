const express = require('express');
const route = express.Router();
const { User } = require('../db/user').models;

route.get('/users', (req, res, next) => {
  User.findAll({
    include: [{ model: User, as: 'manager' }],
  })
    .then(users => res.send(users))
    .catch(error => next(error));
});

route.get('/user/:id', (req, res, next) => {
  const id = req.params.id;
  User.findById(id, {
    include: { model: User, as: 'manager' },
  })
    .then(user => {
      res.send(user);
    })
    .catch(error => next(error));
});

route.post('/users', (req, res, next) => {
  const data = req.body;
  User.create(data).then(data => res.send(data));
});

module.exports = route;
