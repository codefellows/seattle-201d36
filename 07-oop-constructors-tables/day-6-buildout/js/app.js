'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCookiePerCust: 6.3,
  
  // This is how to define a function that IS a method
  randomCustPerHour: function() {
    // we know the min and max
    // we know how to generate a random number (MDN!!!)
    // return Math.random() * (max - min) + min;
    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  
  averagePerHour: function() {
    return Math.round(this.randomCustPerHour() * this.aveCookiePerCust);
  },
  
  generateList: function() {
    var ulEl = document.getElementById('firstPike');
    var runningTotal = 0;
    
    for(var i = 0; i < storeHours.length; i++) {
      // 1. create li elements
      var liEl = document.createElement('li');
      
      // 2. give them content
      var liRandomNum = this.averagePerHour();
      
      liEl.textContent = storeHours[i] + ': ' + liRandomNum + ' cookies';
      runningTotal += liRandomNum;
      // 3. append to the DOM
      // parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);
    }
    
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + runningTotal;
    ulEl.appendChild(totalEl);
  }
};

// Method: a function that is a property of an object and must be invoked using dot notation, such as firstAndPike.randomCustPerHour()

// This is how to define a function that is NOT a method
// function randomCustPerHour() {
  
// }

firstAndPike.generateList();