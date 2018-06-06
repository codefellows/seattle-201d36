// FOR LOOPS
// iterate for a specific number of times
// for(where to start; when to stop; incrementor) {
//   what to do each time;
// }

for(var index = 0; index < 10; index+=2) {
  console.log('index', index);
}

// array to hold my favorite foods 
var faveFoods = ['pizza', 'sushi', 'tacos', 'cookies', 'pasta'];

// prompt the user to guess one of my favorite foods 
var foodGuess = prompt('Can you guess one of my favorite foods?');

for(var i = 0; i < faveFoods.length; i++) {
  console.log('i is referring to:', faveFoods[i]);
  // compare what the user entered to all of the elements in the array
  if(foodGuess === faveFoods[i]) {
    // if the user was correct, tell them so 
    alert('That is correct!');
  } else {
    // if the user was incorrect, tell them that as well
    alert('That is not correct :(');
  }
}

// WHILE LOOPS
// loop will execute as long as a specific condition is met
// no guarantee that it will ever run 
// condition is evaluated first

// while(condition) {
//   code to execute;
// }

var counter = 5;

while (counter > 0) {
  console.log('this is the counter', counter);
  counter--;
}

// DO WHILE
// loop will execute as long as a specific condition is met
// code will run once before evaluating the condition

// do {
//   code to execute;
// } while (condition)

var flag = true;

do {
  counter++;
  console.log('counter ' + counter + ', flag ' + flag);
  if(counter === 10) {
    flag = false;
  }
} while (flag === true)