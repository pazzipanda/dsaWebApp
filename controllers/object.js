const Object = require('../models/object');

//create new object
exports.postObject = function(req, res)  {
  var object = new Object();

  object.name = req.body.name;
  object.opt1 = req.body.opt1;
  object.opt2 = req.body.opt2;
  object.opt3 = req.body.opt3;

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
    object.opt1 = req.body.opt1;
    object.opt2 = req.body.opt2;
    object.opt3 = req.body.opt3;

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
