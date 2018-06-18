'use strict';

// an array to hold our goats
Goat.myGoats = [];

// access the element by id
Goat.imgElement = document.getElementById('goat-pic');
// var imgElement = document.getElementById('goat-pic');

// constructor to make goat instances
function Goat(filepath) {
  this.filepath = filepath;
  Goat.myGoats.push(this);
}

// make goat instances
new Goat('img/cruisin-goat.jpg');
new Goat('img/kissing-goat.jpg');
new Goat('img/sassy-goat.jpg');
new Goat('img/smiling-goat.jpg');
new Goat('img/sweater-goat.jpg');


// attach event listener

// define a callback to run when the event occurs, also the function that runs on page load
// random whole number generator, between 0 and the length of the array
// so that we can randomly pick one from the array and display that goat image
Goat.randomGoat = function() {
  var randomNum = Math.random() * Goat.myGoats.length;
  var roundedDown = Math.floor(randomNum);
  var oneGoat = Goat.myGoats[roundedDown];
  // set the src attribute of the img element
  Goat.imgElement.src = oneGoat.filepath;
  
  // ugly one-liner that does the same thing but might make your eyes bleed
  // Goat.imgElement.src = Goat.myGoats[Math.floor(Math.random() * Goat.myGoats.length)].filepath;
};

Goat.imgElement.addEventListener('click', Goat.randomGoat);

Goat.randomGoat();
