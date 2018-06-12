var jay = {
  firstName: 'Jay',
  lastName: 'Silvas',
  isAwesome: true,
  course: '201d36',
  introduction: function() {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and I am an TA for ' + this.course;
  }
}

// console.log(jay);
// jay.introduction();


var matthew = {
  firstName: 'Matthew',
  lastName: 'Brown',
  isAwesome: true,
  course: '201d36',
  introduction: function() {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ' and I am a student in ' + this.course;
  },
};

// console.log(matthew);
// matthew.introduction();

// CONSTRUCTOR FUNCTION 
// First letter is capitalized (Pascal case)
// construct object literals
// factory for object literals
// every object literal is called an "instance"
// we can attach methods to the instances
// call with the "new" keyword
// unique properties are defined as parameters and passed in as arguments when a new instance is created

// function ConstructorName(parameter1, parameter2) {
//   this.parameter1 = parameter1;
//   this.parameter2 = parameter2;
// }

function Student(firstName, lastName, isAwesome) {
  this.first = firstName;
  this.last = lastName;
  this.isAwe = isAwesome;
  this.course = '201d36';
};

// we need the prototype property here because each instance needs its own version of this method
Student.prototype.introduction = function() {
  return 'Hi, my name is ' + this.first + ' ' + this.last + ' and I am a student in ' + this.course;
};

function addition() {
  console.log(1 + 2);
}

addition();

// we don't need the prototype property here because we aren't using contextual "this" and eaach instance does not need its own version of this method
// however adding it to the Student constructor saves memory
Student.addition = function() {
  console.log(1 + 2);
}

Student.addition();

var andy = new Student('Andy', 'Helmer', true);
// andy.addition();
// console.log(andy);
// console.log(andy.introduction());
var jacques = new Student('Jacques', 'Murinda', true);
// console.log(jacques);
// console.log(jacques.introduction());