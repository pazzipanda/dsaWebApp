const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const objectController = require('./controllers/object');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');

const path = require('path');
const PORT = process.env.PORT || 5000


//defining express router
var app = express();

//connecting to mongodb
mongoose.connect('mongodb://heroku_28lrg8bg:mbcubvup7j34ug81dcd9j8q59v@ds027739.mlab.com:27739/heroku_28lrg8bg');

app.use(passport.initialize());

var router = express.Router();

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  app.use(bodyParser.urlencoded({
      extended: true
    }));

router.get('/', (req, res) => res.render('pages/index'));

router.route('/objects')
  .get(authController.isAuthenticated, objectController.getObjects)
  .post(authController.isAuthenticated, objectController.postObject);
router.route('/object/:object_id')
  .get(authController.isAuthenticated, objectController.getObject)
  .put(authController.isAuthenticated, objectController.putObject)
  .delete(authController.isAuthenticated, objectController.deleteObject);

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

app.use('/', router);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
