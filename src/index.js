//  1.  FUNCTIONS
//  Function declaration
//  Hoisted
//  function sayHi() {
//    console.log("hi");
//  }

//  Function expression
//  No named
//  Not hoisted
// const sayHi = function() {
//   return console.log("hi");
// };

// const sayHi = function sayHi() {
//   return console.log("hi");
// };

// ES6+
// const sayMsg = msg => console.log(msg);
// const shoutMsg = msg => console.log(msg.toUpperCase()+"!");

// sayMsg("hi");
// shoutMsg("hello");

//  2.  DESTRUCTURING

// const newArray = ["tequila", "beer", "wine", "cider"];

// Spread operator
// const [a, b, ...c] = newArray;
// 'c' will be assigned to the rest of the items
// console.log(c);

// const person = {
//   name: "Thomas",
//   age: 39,
//   job: "Web Dev"
// };

// const makePerson = (name, age, job) => {
//   return { name, age, job };
// };

// const dev = makePerson("Derek", 56, "C++ Dev");

// // X const name = dev.name;
// // X const Devname = dev.name;
// const { name, ...rest } = dev;

// console.log(dev);
// console.log(name);
// console.log(rest);

// ********************************************

//  3.  Named Parameters

// const makePerson = ({ firstName, lastName, age, job }) => {
//   return {
//     name: firstName + " " + lastName,
//     age,
//     job
//   };
// };

// const dev = makePerson({
//   firstName: "Thomas",
//   lastName: "Faller",
//   age: 39,
//   job: "Web Dev"
// });

// console.log(dev);

//  **************************************
//  4.  Naming Things
//  **************************************

//  Consistancy is king
//  clearInterval, Searchable & obvious
//  Use Var names that make sense

const BASE_SALARY = 16000;
const SALARY_MULTIPLIER = 4;

const makePerson = ({ firstName, lastName, age, job }) => {
  return {
    name: firstName + " " + lastName,
    age,
    job,
    salary: BASE_SALARY * SALARY_MULTIPLIER
  };
};

const dev = makePerson({
  firstName: "Thomas",
  lastName: "Faller",
  age: 39,
  job: "Web Dev"
});

// DO NOT DO!!!
// const hireDev = ({ devInfo }) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...devInfo
//   };
//   return hiredDevInfo;
// };

// Correct
const hireDev = ({ dev }) => {
  const hiredDevInfo = {
    hired: true,
    ...dev
  };
  return hiredDevInfo;
};

console.log(hireDev({ dev }));

//  5.  Immutables & Pure functions
