const mongoose = require('mongoose');
const Object = require('./object');

//define schema
var SceneSchema = new mongoose.Schema({
  title: String,
  text: Object[]
});

//export Schema
module.exports = mongoose.model('Scene', SceneSchema);
