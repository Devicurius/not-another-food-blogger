

db.dropDatabase();

var seedPageElements = {
  food: [{
    meat: "Skirt Steak"
  }, {
    meat: "Tasso Ham"
  }, {
    meat: "Cornish Hen Breast"
  }, {
    veggie: "Eggplant"
  }, {
    veggie: "Tofu"
  }, {
    veggie: "Butternut Squash"
  }, {
    seafood: "Monkfish"
  }, {
    seafood: "Softshell Crab"
  }, {
    seafood: "Venus Clams"
  }, ],
  snack: [{
    sweet: "Oreos"
  }, {
    sweet: "Gummi Bears"
  }, {
    sweet: "Lucky Charms"
  }, {
    savory: "Doritos"
  }, {
    savory: "Tabbouleh"
  }, {
    savory: "Brie de Meaux"
  }, {
    healthy: "Grape Nuts"
  }, {
    healthy: "Flaxseed"
  }, {
    healthy: "Edamame Hommus"
  }, ],
  // snackImage: [],
  cookMethod: [{
    fast: "Flash-Fried"
  }, {
    fast: "Sauteed"
  }, {
    fast: "Microwaved"
  }, {
    slow: "Smoked"
  }, {
    slow: "Roasted"
  }, {
    slow: "Slow Cooker"
  }, {
    raw: "Pureed"
  }, {
    raw: "Sun-Dried"
  }, {
    raw: "Chopped"
  }, ],
  lorem: [
    "Bacon ipsum dolor amet quis sirloin pork belly tempor, bacon meatball chuck beef swine leberkas ipsum cow. Aliquip proident drumstick kevin tenderloin veniam non in short ribs officia ea t-bone.",
    "Fruitcake chocolate cake. Carrot cake cake chocolate cupcake lemon drops I love. Cookie cake sesame snaps donut cookie donut dragée marzipan. Gummi bears ice cream. Jujubes cake toffee gingerbread.",
    "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
  ],
  ingredients: [],
  instructions: [],
  // PAGE ELEMENTS INDEPENDENT OF USER CHOICES
  stylesheet: [
    ""
  ],
  blogTitle: [],
  writer: [],
  writerImage: [],
  writerBio: []
};

db.PageElements.save(seedPageElements);
