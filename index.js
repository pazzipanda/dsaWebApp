const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Object = require('./models/object');
const path = require('path');
const PORT = process.env.PORT || 5000


//defining express router
var app = express();

//connecting to mongodb
mongoose.connect('mongodb://heroku_28lrg8bg:mbcubvup7j34ug81dcd9j8q59v@ds027739.mlab.com:27739/heroku_28lrg8bg');

var router = express.Router();

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  app.use(bodyParser.urlencoded({
      extended: true
    }));

router.get('/', (req, res) => res.render('pages/index'));

//create new object
router.post('/object', (req, res) => {
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
});

//return all objects
router.get('/objects', (req, res) => {
  Object.find(function(err, objects) {
    if (err)
      res.send(err);

    res.json(objects);
  });
});

//return single object by id
router.get('/object/:object_id', (req, res) => {
  Object.findById(req.params.object_id, function (err, object) {
    if (err)
      res.send(err);
    res.json(object);
  });
});

//update single object by id
router.put('/object/:object_id', (req, res) => {
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
});

//delete a single object by id
router.delete('/object/:object_id', (req, res) => {
  Object.findByIdAndRemove(req.params.object_id, function(err) {
    if(err)
      res.send(err);

    res.json({message: 'Object removed'});
  });
});

app.use('/', router);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
