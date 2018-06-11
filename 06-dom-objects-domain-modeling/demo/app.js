'use strict';

// PROBLEM DOMAIN: Make a list of the miles hiked each month in the summer of 2017

// store the months of the year when I hiked
var months = ['May', 'June', 'July', 'August', 'September'];

// store each year in an object literal
var summer2017 = {
  // store the miles hiked each month
  miles: [25, 18, 100, 4, 972],
  
  // write a function to display the list items
  renderMiles: function() {
    var ulElement = document.getElementById('twoThousandSeventeen');
  
    for(var i = 0; i < months.length; i++) {
    // 1. make my list items -> document.createElement
      var liEl = document.createElement('li');
    
      // 2. use the miles to give the list items some content -> .textContent
      liEl.textContent = 'In ' + months[i] + ', I hiked ' + this.miles[i] + ' miles.';
    
      // 3. display the list items in the browser -> interact with the DOM -> parentElement.appendChild(childElement)
      ulElement.appendChild(liEl);
    }
  }
};

var summer2016 = {
  // store the miles hiked each month
  miles: [2, 37, 10, 45, 92],
  renderMiles: function() {
    var ulElement = document.getElementById('twoThousandSixteen');
  
    for(var i = 0; i < months.length; i++) {
    // 1. make my list items -> document.createElement
      var liEl = document.createElement('li');
    
      // 2. use the miles to give the list items some content -> .textContent
      liEl.textContent = 'In ' + months[i] + ', I hiked ' + this.miles[i] + ' miles.';
    
      // 3. display the list items in the browser -> interact with the DOM -> parentElement.appendChild(childElement)
      ulElement.appendChild(liEl);
    }
  }
};




// Make my code dynamic so I can add other years


// call the function!
summer2017.renderMiles();
summer2016.renderMiles();