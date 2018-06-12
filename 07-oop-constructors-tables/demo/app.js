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

// We need to access the table that is in the DOM

// We need a constructor to make our dog objects

// Let's make a render() method on the constructor's prototype, rather than typed into the constructor function; this will tidy up the way things look in your editor
render = function () {
  // create tr

  // create td

  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop

  // append td to tr

  // append tr to table

};

// We need to create our Dog instances

// We need a separate function to make the table header

// It would be nice to have a single function that renders all of the individual dog rows

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows