const Object = require('../models/object');

//create new object
exports.postObject = function(req, res)  {
  var object = new Object();

  object.name = req.body.name;
  var i;
  for (i = 0; i<req.body.detailsName.length; i++) {
    this.details.push({
      name: req.body.detailsName[i],
      dText: req.body.detailsText[i]
    })
  }

  object.save(function(err) {
    if (err)
    res.send(err);

    res.json({message: 'Object added', data: object});
  });
};

//return all objects
exports.getObjects = function(req, res) {
  Object.find(function(err, objects) {
    if (err)
      res.send(err);

    res.json(objects);
  });
};

//return single object by id
exports.getObject = function (req, res) {
  Object.findById(req.params.object_id, function (err, object) {
    if (err)
      res.send(err);
    res.json(object);
  });
};

//update single object by id
exports.putObject = function (req, res) {
  Object.findById(req.params.object_id, function (err, object) {
    if (err)
      res.send(err);

    object.name = req.body.name;
    var j;
    for (j = 0; i<req.body.detailsName.length; i++) {
      this.details.push({
        name: req.body.detailsName[i],
        dText: req.body.detailsText[i]
      })
    }

    object.save(function(err) {
      if (err)
        res.send(err);

      res.json(object);
    });
  });
};

//delete a single object by id
exports.deleteObject = function (req, res) {
  Object.findByIdAndRemove(req.params.object_id, function(err) {
    if(err)
      res.send(err);

    res.json({message: 'Object removed'});
  });
};
