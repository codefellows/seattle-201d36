'use strict';

// We need an array to hold our dogs
var allDogs = [];

// We need to access the table that is in the DOM
var dogTable = document.getElementById('dog-table');

// We need to access the form that is in the DOM
var dogForm = document.getElementById('dog-form');

// We need a constructor to make our dog objects
function Dog(name, color, breed, nickname) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nickname = nickname;
  allDogs.push(this);
}

// Let's make a render() method on the constructor's prototype, rather than typed into the constructor function; this will tidy up the way things look in your editor
Dog.prototype.renderRow = function () {
  // create tr
  var trElement = document.createElement('tr');
  
  // create td
  var tdElement = document.createElement('td');
  
  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
  tdElement.textContent = this.name;
  
  // append td to tr
  trElement.appendChild(tdElement);
  
  tdElement = document.createElement('td');
  tdElement.textContent = this.color;
  trElement.appendChild(tdElement);
  
  tdElement = document.createElement('td');
  tdElement.textContent = this.breed;
  trElement.appendChild(tdElement);
  
  tdElement = document.createElement('td');
  tdElement.textContent = this.nickname;
  trElement.appendChild(tdElement);
  
  // append tr to table
  dogTable.appendChild(trElement);
};


// We need a separate function to make the table header
Dog.renderHeader = function() {
  // create a row
  var headerRow = document.createElement('tr');
  
  var headings = ['Name', 'Color', 'Breed', 'Nickname'];
  
  for(var i of headings) {
    // fill in the header row with th elements
  // 1. create th elements
    var thElement = document.createElement('th');
  
    // 2. fill in their content
    // Note, if using "for(var i in headings)" then the following line would be written as: 
    //    "thElement.textContent = headings[i]"
    thElement.textContent = i;
  
    // 3. append th to headerRow
    headerRow.appendChild(thElement);
  }
  
  // append to the table
  dogTable.appendChild(headerRow);
};

// It would be nice to have a single function that renders all of the individual dog rows
Dog.renderAllDogs = function() {
  for(var i in allDogs) {
    allDogs[i].renderRow();
  }
};

// Callback function for when the form is submitted
Dog.addNewDog = function(event) {
  // always put this first, it will prevent the default behavior of the browser, which is to refresh the page when the form is submitted
  event.preventDefault();
  var newName = event.target.dogName.value;
  var newColor = event.target.dogColor.value;
  var newBreed = event.target.dogBreed.value;
  var newNickname = event.target.dogNickname.value;
  
  new Dog(newName, newColor, newBreed, newNickname);
  // new Dog('Rosie', 'Tan', 'Lab', 'Rosie-Girl');
  // new Dog(event.target.dogName.value, event.target.dogColor.value, event.target.dogBreed.value, event.target.dogNickname.value);
  
  dogTable.textContent = '';
  Dog.renderHeader();
  Dog.renderAllDogs();
};

// We need to create our Dog instances
// We can assign these to variables if we are calling methods on a specific instance, such as gary.renderRow()
// Or, we can create an instance beginning with the "new" keyword, but without assigning it to a variable, if we are using the Dog.renderAllDogs method **because we pushed each instance into the allDogs array upon creation**
new Dog('Gary', 'White', 'Westie', 'Gare Bear');
new Dog('Charlotte', 'White', 'Westie', 'Goose');
new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
new Dog('Buddy', 'Black', 'Labra-Doodle', '');
new Dog('Demi', 'Black and White', 'Border Collie', null);

// Add the event listener to the form
dogForm.addEventListener('submit', Dog.addNewDog);

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows

// we can call the renderRow() method on each instance if we assign the instance to a variable (as we did in the day 7 demo)...
// gary.renderRow();
// charlotte.renderRow();
// demi.renderRow();

// ...or we can push all of our dogs into an array and invoke the .renderRow() method on each instance in a for loop, which is what the Dog.renderAllDogs() method is accomplishing
Dog.renderHeader();
Dog.renderAllDogs();