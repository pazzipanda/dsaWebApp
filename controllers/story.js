const Story = require('../models/story');

//create new story
exports.postStory = function(req, res)  {
  var story = new Story();

  story.title = req.body.title;
  story.text = req.body.text;

  story.save(function(err) {
    if (err)
    res.send(err);

    res.json({message: 'Story added', data: story});
  });
};

//return all storys
exports.getStorys = function(req, res) {
  Story.find(function(err, storys) {
    if (err)
      res.send(err);

    res.json(storys);
  });
};

//return single story by id
exports.getStory = function (req, res) {
  Story.findById(req.params.story_id, function (err, story) {
    if (err)
      res.send(err);
    res.json(story);
  });
};

//update single story by id
exports.putStory = function (req, res) {
  Story.findById(req.params.story_id, function (err, story) {
    if (err)
      res.send(err);

        story.title = req.body.title;
        story.text = req.body.text;

    story.save(function(err) {
      if (err)
        res.send(err);

      res.json(story);
    });
  });
};

//delete a single story by id
exports.deleteStory = function (req, res) {
  Story.findByIdAndRemove(req.params.story_id, function(err) {
    if(err)
      res.send(err);

    res.json({message: 'Story removed'});
  });
};
