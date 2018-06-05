'use strict';

// conditional logic
// if/else 

// if (condition is met) {
//   run this line of code;
// } else {
//   run this line of code; 
// }

var petAge = parseInt(prompt('How old do you think my dogs are?'));

if(petAge === 9) {
  alert('That is correct!');
} else if(petAge > 9) {
  alert('That is too high.');
} else {
  alert('That is too low.');
}

// if(petAge === 9) {
//   alert('That is correct!');
// } else {
//   alert('That is not correct.');
// }

// possible inputs: y, yes, yeah, yep, Y, YES, YeS, n, N, no, NO, No

var playGame = prompt('Do you want to play my guessing game? Please only answer with yes or no.').toLowerCase();

if(playGame === 'yes') {
  
}