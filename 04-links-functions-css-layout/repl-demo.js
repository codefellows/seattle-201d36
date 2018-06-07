'use strict';

function math(a, b) {
  var sum = a + b;
  var product = a * b;
  return [sum, product];
  // return [(a + b), (a * b)];
}

var myResult = math(3, 4);
// console.log(myResult);
// console.log(myResult[0]);

function greet(name) {
  console.log('Hi ' + name);
}

// greet('Jay');
// greet('Marie');

var dog = 'Gary';

function theScope() {
  var dog = 'Charlotte';
  console.log('Inside', dog);
}

console.log('Outside', dog);

theScope();





