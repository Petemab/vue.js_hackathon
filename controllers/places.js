const Place = require('../models/place');

function index(req, res, next) {
  Place
    .find()
    .exec()
    .then(places => res.json(places))
    .catch(next);
}

function create(req, res, next) {
  Place
    .create(req.body)
    .then(place => res.json(place))
    .catch(next);
}

function update(req, res, next) {
  Place
    .findById(req.params.id)
    .exec()
    .then(place => {
      Object.assign(place, req.body);
      return place.save();
    })
    .then(place => res.json(place))
    .catch(next);
}

function show(req, res, next) {
  Place.findById(req.params.id)
    .exec()
    .then(place => res.json(place))
    .catch(next);
}

function remove(req, res, next) {
  Place.findById(req.params.id)
    .exec()
    .then(place => place.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index,
  create,
  update,
  show,
  remove
};
