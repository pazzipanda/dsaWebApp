const Scene = require('../models/scene');

//create new scene
exports.postScene = function(req, res)  {
  var scene = new Scene();

  scene.title = req.body.title;
  scene.text = req.body.text;

  scene.save(function(err) {
    if (err)
    res.send(err);

    res.json({message: 'Scene added', data: scene});
  });
};

//return all scenes
exports.getScenes = function(req, res) {
  Scene.find(function(err, scenes) {
    if (err)
      res.send(err);

    res.json(scenes);
  });
};

//return single scene by id
exports.getScene = function (req, res) {
  Scene.findById(req.params.scene_id, function (err, scene) {
    if (err)
      res.send(err);
    res.json(scene);
  });
};

//update single scene by id
exports.putScene = function (req, res) {
  Scene.findById(req.params.scene_id, function (err, scene) {
    if (err)
      res.send(err);

        scene.title = req.body.title;
        scene.text = req.body.text;

    scene.save(function(err) {
      if (err)
        res.send(err);

      res.json(scene);
    });
  });
};

//delete a single scene by id
exports.deleteScene = function (req, res) {
  Scene.findByIdAndRemove(req.params.scene_id, function(err) {
    if(err)
      res.send(err);

    res.json({message: 'Scene removed'});
  });
};
