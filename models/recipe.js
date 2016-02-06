var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  completed: { type: Boolean, required: true }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
