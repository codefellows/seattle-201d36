'use strict';

// keep track of all clicks
Goat.totalClicks = 0;

// track previously displayed goats
Goat.lastDisplayed = [];

// array to store names for the chart
Goat.names = [];

// array to store the votes for the chart
Goat.totalVotes = [];

// hold random HEX colors for the chart
Goat.arrayOfColors = [];

// access the section element from the DOM
Goat.sectionEl = document.getElementById('goat-section');

// access the ul element from the DOM
Goat.ulEl = document.getElementById('results');

// access the buttons from the DOM
Goat.barButton = document.getElementById('bar');
Goat.doughnutButton = document.getElementById('doughnut');
Goat.polarAreaButton = document.getElementById('polarArea');

// access the img elements from the DOM
Goat.rightEl = document.getElementById('right');
Goat.leftEl = document.getElementById('left');

// check local storage for results
Goat.parsedGoats = JSON.parse(localStorage.getItem('userResults'));

// set up property to hold the chart
// use it to determine if a chart already exists and if so, destroy it in the event handler
Goat.resultsChart;
// var resultsChart;


// set up the constructor function
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Goat.allGoats.push(this);
}

// make new Goat instances
Goat.allGoats = Goat.parsedGoats || [
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
];

// randomly display picture of goats
Goat.randomGoat = function() {
  do {
    // generate random numbers to use for the indices
    var randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
    var randomRight = Math.floor(Math.random() * Goat.allGoats.length);

  } while (randomLeft === randomRight
    || Goat.lastDisplayed.includes(randomLeft)
    || Goat.lastDisplayed.includes(randomRight));
  
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
    Goat.totalVotes[i] = Goat.allGoats[i].votes;
    
    Goat.names[i] = Goat.allGoats[i].name;
    
    Goat.arrayOfColors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
  }
};

// define our callback function
Goat.handleClick = function(event) {
  // increment number of clicks
  Goat.totalClicks++;
  console.log(Goat.totalClicks);
  
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
    
    // store results in local storage
    localStorage.setItem('userResults', JSON.stringify(Goat.allGoats));
    // localStorage.userResults = JSON.stringify(Goat.allGoats);
    
    // display results
    Goat.showList();
    Goat.updateVotes();
  } else {
    Goat.randomGoat();
  }
};

// method to render the chart on the screen
Goat.renderChart = function(event) {
  
  if(Goat.resultsChart) Goat.resultsChart.destroy();
  
  // set the chart type based on the button clicked
  var chartType = event.target.id;
  
  var context = document.getElementById('results-chart').getContext('2d');
    
  Goat.resultsChart = new Chart(context, { // eslint-disable-line
    type: chartType,
    data : {
      labels: Goat.names,
      datasets: [{
        label: 'Votes Per Goat',
        data: Goat.totalVotes,
        backgroundColor: Goat.arrayOfColors,
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

// add event listener to the section
Goat.sectionEl.addEventListener('click', Goat.handleClick);

// add event listeners to the buttons
Goat.barButton.addEventListener('click', Goat.renderChart);
Goat.doughnutButton.addEventListener('click', Goat.renderChart);
Goat.polarAreaButton.addEventListener('click', Goat.renderChart);

// display two goats on page load
Goat.randomGoat();
