// OBJECT LITERALS
// they are literally objects 
// can store both values and methods as properties
// what is a method? a function that is inside the object as a property
// values can be strings, numbers, booleans, arrays, functions, other objects 

// var myObject = {
//   key1: value1,
//   key2: value2,
//   key3: value3,
// }

var allie = {
  heightInInches: 62,
  age: 34,
  languagesSpoken: ['English', 'JavaScript', 'CSS', 'HTML', 'CSS', 'jQuery', 'SQL'],
  hairColor: 'brown',
  siblings: [
    {
      name: 'Jacci',
      age: 35,
    },
    {
      name: 'Matt',
      age: 29,
    }
  ],
}
console.log(allie.siblings[1].age);
// console.log(allie);
// console.log(allie.age);


var myArray = ['Allie', 'Jay', 'Molly'];

var arrayAsObject = {
  0: 'Allie',
  1: 'Jay',
  2: 'Molly',
}