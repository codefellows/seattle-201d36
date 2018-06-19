'use strict';

// array to store the objects
Goat.allGoats = [];

// keep track of all clicks
Goat.totalClicks = 0;

// track previously displayed goats
Goat.lastDisplayed = [];

// access the section element from the DOM
Goat.sectionEl = document.getElementById('goat-section');

// access the ul element from the DOM
Goat.ulEl = document.getElementById('results');

// set up the constructor function
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Goat.allGoats.push(this);
}

// make new Goat instances
new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
new Goat('Kissing goats', 'img/kissing-goat.jpg');
new Goat('Sassy goat', 'img/sassy-goat.jpg');
new Goat('Smiling goat', 'img/smiling-goat.jpg');
new Goat('Sweater goat', 'img/sweater-goat.jpg');
new Goat('Flower goat', 'img/flower-goat.jpg');
new Goat('Pushy goat', 'img/pushy-goat.jpg');
new Goat('Goat with it\'s tongue out', 'img/tongue.jpg');
new Goat('Underbite goat', 'img/underbite.jpg');
new Goat('Jumping goat', 'img/jumping.jpg');
new Goat('Goatogenic', 'img/goatogenic.png');

// access the img elements from the DOM
Goat.rightEl = document.getElementById('right');
Goat.leftEl = document.getElementById('left');
