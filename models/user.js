var mongoose = require('mongoose');
var Recipe = require('./recipe');

var UserSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String,
    // twitter_handle: String,
    recipes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe'
    }]
  },
});

module.exports = mongoose.model('User', UserSchema);
