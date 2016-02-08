var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

var authenticate = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.redirect('/');
  }
  else {
    next();
  }
}

// INDEX
router.get('/', authenticate, function(req, res, next) {
  var recipes = global.currentUser.recipes;
  res.render('recipes/index', { recipes: recipes, message: req.flash() });
});

// NEW
router.get('/new', authenticate, function(req, res, next) {
  var recipe = {
    title: '',
    completed: false
  };
  res.render('recipes/new', { recipe: recipe, message: req.flash() });
});

// SHOW
router.get('/:id', authenticate, function(req, res, next) {
  var recipe = currentUser.recipes.id(req.params.id);
  if (!recipe) return next(makeError(res, 'Document not found', 404));
  res.render('recipes/show', { recipe: recipe, message: req.flash() } );
});

// CREATE
router.post('/', authenticate, function(req, res, next) {
  var recipe = {
    title: req.body.title,
    completed: req.body.completed ? true : false
  };
  // Since a user's recipes are an embedded document, we just need to push a new
  // TODO to the user's list of recipes and save the user.
  currentUser.recipes.push(recipe);
  currentUser.save()
  .then(function() {
    res.redirect('/recipes');
  }, function(err) {
    return next(err);
  });
});

// EDIT
router.get('/:id/edit', authenticate, function(req, res, next) {
  var todo = currentUser.recipes.id(req.params.id);
  if (!todo) return next(makeError(res, 'Document not found', 404));
  var checked = todo.completed ? 'checked' : '';
  res.render('recipes/edit', { todo: todo, checked: checked, message: req.flash() } );
});

// UPDATE
router.put('/:id', authenticate, function(req, res, next) {
  var todo = currentUser.recipes.id(req.params.id);
  if (!todo) return next(makeError(res, 'Document not found', 404));
  else {
    todo.title = req.body.title;
    todo.completed = req.body.completed ? true : false;
    currentUser.save()
    .then(function(saved) {
      res.redirect('/recipes');
    }, function(err) {
      return next(err);
    });
  }
});

// DESTROY
router.delete('/:id', authenticate, function(req, res, next) {
  var todo = currentUser.recipes.id(req.params.id);
  if (!todo) return next(makeError(res, 'Document not found', 404));
  var index = currentUser.recipes.indexOf(todo);
  currentUser.recipes.splice(index, 1);
  currentUser.save()
  .then(function(saved) {
    res.redirect('/recipes');
  }, function(err) {
    return next(err);
  });
});

module.exports = router;
