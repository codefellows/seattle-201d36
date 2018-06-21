// PASS BY VALUE
// strings, number, booleans
var a = 10;
var b = a;
// console.log('Before reassigning:', b);
a = 5;
// console.log('After reassigning:', b);

// PASS BY REFERENCE
// arrays, objects

var myArray = ['allie', 'jay'];
var mySecondArray = myArray;
console.log('Before push', mySecondArray);
myArray.push('molly');
console.log('After push', mySecondArray);