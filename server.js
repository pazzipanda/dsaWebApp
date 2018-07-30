//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    bodyParser = require('body-parser');
    mongoose = require('mongoose');
    Character = require('./models/character');

Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
      mongoPassword = process.env[mongoServiceName + '_PASSWORD']
      mongoUser = process.env[mongoServiceName + '_USER'];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

  }
}
var db = null,
    dbDetails = new Object();

var initDb = function(callback) {
  if (mongoURL == null) return;

  var mongodb = require('mongodb');
  if (mongodb == null) return;

  mongodb.connect(mongoURL, function(err, conn) {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
  });
};

app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    var col = db.collection('counts');
    // Create a document with request IP and current time of request
    col.insert({ip: req.ip, date: Date.now()});
    col.count(function(err, count){
      if (err) {
        console.log('Error running count. Message:\n'+err);
      }
      res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
    });
  } else {
    res.render('index.html', { pageCountMessage : null});
  }
});

app.get('/pagecount', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    db.collection('counts').count(function(err, count ){
      res.send('{ pageCount: ' + count + '}');
    });
  } else {
    res.send('{ pageCount: -1 }');
  }
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

initDb(function(err){
  console.log('Error connecting to Mongo. Message:\n'+err);
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

// ============================================================================
// everything up to here was imported from the default openshift node project

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

//Mongoose:

// Connect mongoose to mongodb
  var connect = function () {
      mongoose.connect(mongoURL);
  };
  connect();

  var dbMongoose = mongoose.connection;

  dbMongoose.on('error', function(error){
      console.log("Error loading the db - "+ error);
  });

  dbMongoose.on('disconnected', connect);




//  Routing:
var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'api route working'});
});

// Create a new route with the prefix /char
var charRoute = router.route('/char');

// Create endpoint /api/char for GET
//Note: This route is for testing and developing only
charRoute.get(function(req, res) {
  // Use the Character model to find all Characters
  Character.find(function(err, chars) {
    if (err)
      res.send(err);

    res.json(chars);
  });
});


// Create endpoint /api/char for POSTS
charRoute.post(function(req, res) {
  // Create a new instance of the Charater model
  var character = new Character();

  // Set the character properties that came from the POST data
  character.owner = req.body.owner;
  character.name = req.body.name;
  character.level = 0;

  // Save the character and check for errors
  character.save(function(err) {
    if (err)
      res.json({ message: 'couldnt save'});

    res.json({ message: 'Character added to game', data: character });
  });
});


// Create a new route with the /char/:char_id prefix
var charRoute = router.route('/char/:user_id');

// Create endpoint /api/char/:user_id for GET
charRoute.get(function(req, res) {
  // Use the Character model to find a specific character
  Character.findOne( { 'owner' : req.params.user_id }, function(err, char) {
    if (err)
      res.send(err);

    res.json(char);
  });
});



// Create endpoint /api/char/:user_id for PUT
charRoute.put(function(req, res) {
  // Use the Character model to find a specific Character
  Character.findOne( { 'owner' : req.params.user_id }, function(err, char) {
    if (err)
      res.send(err);

    // Update the characters level
    char.level = req.body.newLevel;

    // Save the Character and check for errors
    char.save(function(err) {
      if (err)
        res.send(err);

      res.json(char);
    });
  });
});

// Create endpoint /api/char/:char_id for DELETE
charRoute.delete(function(req, res) {
  // Use the Character model to find a specific character and remove it
  Character.findOneAndRemove( { 'owner' : req.params.user_id }, function(err, char) {
    if (err)
      res.send(err);

    res.json({ message: 'Character removed from the database!' });
  });
});

app.use('/api', router);

module.exports = app ;
