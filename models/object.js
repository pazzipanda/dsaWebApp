const mongoose = require('mongoose');

//define schema
var ObjectSchema = new mongoose.Schema({
  name: String,
  opt1: String,
  opt2: String,
  opt3: String
});

//export Schema
module.exports = mongoose.model('Object', ObjectSchema);
