var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Alert = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  active: {
    type: String,
    required: true,
    default: 'Yes'
  }
});

module.exports = mongoose.model('Alert', Alert);
