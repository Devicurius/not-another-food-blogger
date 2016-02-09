var mongoose = require('mongoose');
var PageElements = require('./models/page-elements');

mongoose.connect('mongodb://localhost/page-elements');

// our app will not exit until we have disconnected from the db.
function quit() {
  mongoose.disconnect();
  console.log('\nDISCONNECTING');
}

// a simple error handler
function handleError(err) {
  console.log('ERROR:', err);
  quit();
  return err;
}

console.log('removing old page elements...');
PageElements.remove({})
  .then(function() {
    console.log('old page elements removed');
    console.log('creating some new page elements...');
    var elements = new PageElements({
      food: {
        meat: ["Fatback", "Chicken Livers", "Cube Steak"],
        veggie: ["Okra", "Tofu", "Butternut Squash"],
        seafood: ["Monkfish", "Softshell Crab", "Venus Clams"]
      }
    });
    // elements.save();
    return PageElements.create(elements);
  })
  .then(function(savedPageElements) {
    console.log('PageElements have been saved');
    return PageElements.find({});
  })
  .then(function(allPageElements) {
    console.log('Printing all page elements...');
    allPageElements.forEach(function(element) {
      console.log(element);
    });
    quit();
  });
