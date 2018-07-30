var mongoose = require('mongoose');

//define character schema
var CharacterSchema = new mongoose.Schema({

  owner: String,
  name: String,
  level: Number
});

//export Mongoose model
module.exports = mongoose.model('Character', CharacterSchema);
