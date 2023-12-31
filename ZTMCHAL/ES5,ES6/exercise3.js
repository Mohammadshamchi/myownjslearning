// change everything below to the newer Javascript!

// let + const
var a = "test";
var b = true;
var c = 789;
a = "test2";

// for let a="test2"
// const  can't reasigned
// == == == == ==

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

var [firstName, lastName, age, eyeColor] = person;
// == == == == ==

// Object properties
var a = "test";
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c,
};

var okObj = {
  a,
  b,
  c,
};
// == == == == ==

// Template strings
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

// default arguments
// default age to 10;
function isValidAge(age = 10) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
let mysymb = Symbol("This is my first symbol!");
// == == == == ==

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

let whereAmI = (username, location) => {
  whereAmI(username, location) ? "I am not lost" : "I am totaly lost!";
};
//  also

let whereAmI = (username, location) =>
  whereAmI(username, location) ? "I am not lost" : "I am totaly lost!";
