'use strict';

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>                 PUT THIS AND ONLY THIS IN THE HTML, WITH AN ID
  <tr>                  create tr
    <th>Name</th>       create a th, give it content, append it to tr
    <th>Color</th>      create a th, give it content, append it to tr
    <th>Breed</th>      create a th, give it content, append it to tr
    <th>Nickname</th>   create a th, give it content, append it to tr
  </tr>                 append tr to the table

  <tr>
    <td>Gary</td>
    <td>White</td>
    <td>Westie</td>
    <td>Gare Bear</td>
  </tr>
</table>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

Thus, we'll want to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="dogs" */

// We need an array to hold our dogs
var allDogs = [];

// We need to access the table that is in the DOM
var dogTable = document.getElementById('dogs');

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

// We need to create our Dog instances
// We can assign these to variables if we are calling methods on a specific instance, such as gary.renderRow()
// Or, we can create an instance beginning with the "new" keyword, but without assigning it to a variable, if we are using the Dog.renderAllDogs method **because we pushed each instance into the allDogs array upon creation**
var gary = new Dog('Gary', 'White', 'Westie', 'Gare Bear');
var charlotte = new Dog('Charlotte', 'White', 'Westie', 'Goose');
var demi = new Dog('Demi', 'Black and white', 'Border Collie', 'Dem');

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
}

// It would be nice to have a single function that renders all of the individual dog rows
Dog.renderAllDogs = function() {
  for(var i in allDogs) {
    allDogs[i].renderRow();
  }
}

Dog.renderHeader();
Dog.renderAllDogs();
// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows
// gary.renderRow();
// charlotte.renderRow();
// demi.renderRow();