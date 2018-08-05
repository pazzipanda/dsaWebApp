const mongoose = require('mongoose');
const Scene = require('./scene');

//define schema
var StorySchema = new mongoose.Schema({
  title: String,
  scenes: Scene[],
  booleans: Boolean[],
  numbers: Number[]
});

//export Schema
module.exports = mongoose.model('Story', StorySchema);
