var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Devicurious' });
});

// GET /signup
router.get('/signup', function(req, res, next) {
  res.render('signup.jade', { message: req.flash() });
});

// POST /signup
router.post('/signup', function(req, res, next) {
  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/recipes',
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signUpStrategy(req, res, next);
});

// GET /login
router.get('/signin', function(req, res, next) {
  res.render('signin.jade', { message: req.flash() });
// REMOVE FLASH MESSAGE DUE TO SESSION DEPENDENCY CAUSING APP SERVER TO CRASH
  // res.render('signin.jade');
});

// POST /login
router.post('/login', function(req, res, next) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/recipes',
    failureRedirect : '/login',
    failureFlash : true
  });

  return loginProperty(req, res, next);
});

// GET /logout
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

// Restricted page
// router.get('/secret', function(req, res, next) {
//   if (currentUser) {
//     res.render('secret.jade');
//   }
//   else {
//     res.redirect('/');
//   }
// });

module.exports = router;
