'use strict';

// arry to hold all the goats
var allGoats = [];

// keep track of all clicks
var totalClicks = 0;

// track previously displayed goats
var lastDisplayed = [];

// array to store names for the chart
var names = [];

// array to store the votes for the chart
var totalVotes = [];

// hold random HEX colors for the chart
var arrayOfColors = [];

// access the section element from the DOM
var sectionEl = document.getElementById('goat-section');

// access the ul element from the DOM
var ulEl = document.getElementById('results');

// access the buttons from the DOM
var barButton = document.getElementById('bar');
var doughnutButton = document.getElementById('doughnut');
var polarAreaButton = document.getElementById('polarArea');

// access the img elements from the DOM
var rightEl = document.getElementById('right');
var leftEl = document.getElementById('left');

// check local storage for results
var parsedGoats = JSON.parse(localStorage.getItem('userResults'));

// set up property to hold the chart
// use it to determine if a chart already exists and if so, destroy it in the event handler
var resultsChart;

// set up the constructor function
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  allGoats.push(this);
}

// make new Goat instances
allGoats = parsedGoats || [
  new Goat('Cruisin goat', 'img/cruisin-goat.jpg'),
  new Goat('Kissing goats', 'img/kissing-goat.jpg'),
  new Goat('Sassy goat', 'img/sassy-goat.jpg'),
  new Goat('Smiling goat', 'img/smiling-goat.jpg'),
  new Goat('Sweater goat', 'img/sweater-goat.jpg'),
  new Goat('Flower goat', 'img/flower-goat.jpg'),
  new Goat('Pushy goat', 'img/pushy-goat.jpg'),
  new Goat('Goat with it\'s tongue out', 'img/tongue.jpg'),
  new Goat('Underbite goat', 'img/underbite.jpg'),
  new Goat('Jumping goat', 'img/jumping.jpg'),
  new Goat('Goatogenic', 'img/goatogenic.png'),
];

// randomly display picture of goats
function randomGoat() {
  do {
    // generate random numbers to use for the indices
    var randomLeft = Math.floor(Math.random() * allGoats.length);
    var randomRight = Math.floor(Math.random() * allGoats.length);

  } while (randomLeft === randomRight
    || lastDisplayed.includes(randomLeft)
    || lastDisplayed.includes(randomRight));
  
  lastDisplayed[0] = randomLeft;
  lastDisplayed[1] = randomRight;
  
  // set the src and alt attributes of the img elements
  leftEl.src = allGoats[randomLeft].filepath;
  leftEl.alt = allGoats[randomLeft].name;
  
  rightEl.src = allGoats[randomRight].filepath;
  rightEl.alt = allGoats[randomRight].name;
  
  // Increment the number of times each image is displayed
  allGoats[randomLeft].timesDisplayed++;
  allGoats[randomRight].timesDisplayed++;
}

// display the results as a list on the screen
function showList() {
  for(var i in allGoats) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allGoats[i].name} has ${allGoats[i].votes} votes and was displayed ${allGoats[i].timesDisplayed} times.`;
    ulEl.appendChild(liEl);
  }
}

// tally up the votes for the chart
function updateVotes() {
  for(var i in allGoats) {
    totalVotes[i] = allGoats[i].votes;
    
    names[i] = allGoats[i].name;
    
    arrayOfColors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
  }
}

// define our callback function
function handleClick(event) {
  // increment number of clicks
  totalClicks++;
  
  for(var i in allGoats) {
    // determine which goat was clicked on
    if(event.target.alt === allGoats[i].name) {
      // increment its number of votes
      allGoats[i].votes++;
    }
  }
  
  if(totalClicks > 9) {
    // remove the event listener
    sectionEl.removeEventListener('click', handleClick);
    
    // store results in local storage
    localStorage.setItem('userResults', JSON.stringify(allGoats));
    // localStorage.userResults = JSON.stringify(Goat.allGoats);
    
    // display results
    showList();
    updateVotes();
  } else {
    randomGoat();
  }
}

// method to render the chart on the screen
function renderChart(event) {
  
  if(resultsChart) resultsChart.destroy();
  
  // set the chart type based on the button clicked
  var chartType = event.target.id;
  
  var context = document.getElementById('results-chart').getContext('2d');
    
  resultsChart = new Chart(context, { // eslint-disable-line
    type: chartType,
    data : {
      labels: names,
      datasets: [{
        label: 'Votes Per Goat',
        data: totalVotes,
        backgroundColor: arrayOfColors,
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
}

// add event listener to the section
sectionEl.addEventListener('click', handleClick);

// add event listeners to the buttons
barButton.addEventListener('click', renderChart);
doughnutButton.addEventListener('click', renderChart);
polarAreaButton.addEventListener('click', renderChart);

// display two goats on page load
randomGoat();
