const mongoose = require('mongoose');

//define schema
var ObjectSchema = new mongoose.Schema({
  text: String,
   details: [{
     title: String,
     dText: String
   }]
});

//export Schema
module.exports = mongoose.model('Object', ObjectSchema);
