// DATA TYPES
// Strings
// Number 
// Boolean 
// Null 
// Undefined 
// Function 
// Object 

var dogAge = prompt('How old do you think my dogs are?', 9);
console.log('My dogs are', dogAge);
console.log(typeof dogAge);

var parsedAge = parseInt(dogAge);
console.log(typeof parsedAge);

// ARRAYS 
// data structure
// object 
// storing sets of data 
// square brackets
// each item is called an element
// array indices/positions start at zero

// don't do this
var myMixedArray = ['a string', 5, true];
var myArray = [4, 8, 12, 5];
console.log(myArray[2]);
console.log(myArray.length);

// PUSH method
// adds to the end of an array
// returns the new length 
console.log('before push', myArray.length);
console.log(myArray.push(17));
console.log('after push', myArray.length);
console.log(myArray);

// POP method 
// removes the last element from an array 
// returns that element 
var lastElement = myArray.pop();
console.log(myArray);
console.log('last element', lastElement);

// UNSHIFT method 
// adds elements to the beginning of an array 
// returns the new length 
myArray.unshift(6);
console.log(myArray);

// SHIFT method
// remove and return the first element from an array
var firstElement = myArray.shift();
console.log(firstElement, 'first element');