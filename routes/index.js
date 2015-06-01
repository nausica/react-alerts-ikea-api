var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Alert = require('../models/alert');

/* GET all alerts */
router.get('/', function(req, res) {
  Alert.find({}, function(err, alerts) {
    if (err)
      res.status(500).json(err);
    res.json(alerts);
  })
});

/* POST create alert */
router.post('/', function(req, res) {
  var alert = new Alert(req.body);
  console.log(alert)
  alert.save(function(err, alert) {
    if (err)
      res.send(err);
    res.json(alert);
  });
});

/* PUT update a alert by id */
router.put('/:id', function(req, res) {
  Alert.findById(req.params.id, function (err, alert) {
    if (err) {
      res.send(err);
    } else {
      // assign submitted properties to object for updates
      _.extend(alert, req.body);
      alert.save(function(err, alert) {
        if (err)
          res.send(err);
        res.json(alert);
      });
    }
  });
});

/* GET alert by id */
router.get('/:id', function(req, res) {
  res.contentType('application/json');
  Alert.findById(req.params.id, function (err, alert) {
    if (err)
      res.send(err);
    res.json(alert);
  });
});

module.exports = router;
