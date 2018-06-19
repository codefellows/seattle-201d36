'use strict';

// array to store the objects
Goat.allGoats = [];

// keep track of all clicks
Goat.totalClicks = 0;

// track previously displayed goats
Goat.lastDisplayed = [];

// array to store names for the chart
Goat.names = [];

// array to store the votes for the chart
Goat.totalVotes = [];

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
  // Goat.names.push(this.name);
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

// randomly display picture of goats
Goat.randomGoat = function() {
  do {
    // generate random numbers to use for the indices
    var randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
    var randomRight = Math.floor(Math.random() * Goat.allGoats.length);
    // console.log('Duplicate was caught');
    // console.log('Random left:', randomLeft);
    // console.log('Random right:', randomRight);
  } while (randomLeft === randomRight
    || Goat.lastDisplayed.includes(randomLeft)
    || Goat.lastDisplayed.includes(randomRight));
  
  // make sure there are no duplicates in the set
  // make sure there are no repeats from the previous set
  // CHECK THREE CONDITIONS:
  // 1. randomLeft cannot be the same as randomRight
  // 2. randomLeft is not in the Goat.lastDisplayed array
  // 3. randomRight is not in the Goat.lastDisplayed array
  
  // How to make sure the Goat.lastDisplayed array ONLY contains the last set
  // 1. pop() the elements out, then push() new elements in
  // Goat.lastDisplayed.pop();
  // Goat.lastDisplayed.pop();
  
  // Goat.lastDisplayed.push(randomLeft);
  // Goat.lastDisplayed.push(randomRight);
  
  // 2. Reset to an empty array
  // Goat.lastDisplayed = [];
  
  // Goat.lastDisplayed.push(randomLeft);
  // Goat.lastDisplayed.push(randomRight);
  
  // 3. Overwrite the element at a specific index
  Goat.lastDisplayed[0] = randomLeft;
  Goat.lastDisplayed[1] = randomRight;
  
  // set the src and alt attributes of the img elements
  Goat.leftEl.src = Goat.allGoats[randomLeft].filepath;
  Goat.leftEl.alt = Goat.allGoats[randomLeft].name;
  
  Goat.rightEl.src = Goat.allGoats[randomRight].filepath;
  Goat.rightEl.alt = Goat.allGoats[randomRight].name;
  
  // Increment the number of times each image is displayed
  Goat.allGoats[randomLeft].timesDisplayed++;
  Goat.allGoats[randomRight].timesDisplayed++;
};

// display the results as a list on the screen
Goat.showList = function() {
  for(var i in Goat.allGoats) {
    var liEl = document.createElement('li');
    liEl.textContent = `${Goat.allGoats[i].name} has ${Goat.allGoats[i].votes} votes and was displayed ${Goat.allGoats[i].timesDisplayed} times.`;
    Goat.ulEl.appendChild(liEl);
  }
};

// tally up the votes for the chart
Goat.updateVotes = function() {
  for(var i in Goat.allGoats) {
    // Goat.totalVotes.push(Goat.allGoats[i].votes);
    Goat.totalVotes[i] = Goat.allGoats[i].votes;
    
    // Goat.names.push(Goat.allGoats[i].name);
    Goat.names[i] = Goat.allGoats[i].name;
  }
};

// define our callback function
Goat.handleClick = function(event) {
  // increment number of clicks
  Goat.totalClicks++;
  console.log(Goat.totalClicks);
  
  // console.log('the alt: ', event.target.alt);
  // console.log('the src: ', event.target.src);
  // for(var i = 0; i < Goat.allGoats.length; i++)
  for(var i in Goat.allGoats) {
    // determine which goat was clicked on
    if(event.target.alt === Goat.allGoats[i].name) {
      // increment its number of votes
      Goat.allGoats[i].votes++;
    }
  }
  
  if(Goat.totalClicks > 9) {
    // remove the event listener
    Goat.sectionEl.removeEventListener('click', Goat.handleClick);
    // display results
    Goat.showList();
    Goat.updateVotes();
    Goat.renderChart();
  } else {
    Goat.randomGoat();
  }
};

// add event listener to the section
Goat.sectionEl.addEventListener('click', Goat.handleClick);

Goat.randomGoat();



// method to render the chart on the screen
Goat.renderChart = function() {
  var context = document.getElementById('results-chart').getContext('2d');
  
  var chartColors = ['red', 'green', 'blue', '#fff'];
  
  var goatChart = new Chart(context, { // eslint-disable-line
    type: 'bar',
    data : {
      labels: Goat.names,
      datasets: [{
        label: 'Votes Per Goat',
        data: Goat.totalVotes,
        backgroundColors: chartColors,
        // backgroundColors: ['red','green','blue', '#fff'],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          tick: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
};