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

// const BASE_SALARY = 16000;
// const SALARY_MULTIPLIER = 4;

// const makePerson = ({ firstName, lastName, age, job }) => {
//   return {
//     name: firstName + " " + lastName,
//     age,
//     job,
//     salary: BASE_SALARY * SALARY_MULTIPLIER
//   };
// };

// const dev = makePerson({
//   firstName: "Thomas",
//   lastName: "Faller",
//   age: 39,
//   job: "Web Dev"
// });

// DO NOT DO!!!
// const hireDev = ({ devInfo }) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...devInfo
//   };
//   return hiredDevInfo;
// };

// Correct
// const hireDev = ({ dev }) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...dev
//   };
//   return hiredDevInfo;
// };

// console.log(hireDev({ dev }));

//  5.  Immutables & Pure functions

//  Immutable vs. Mutable
//  can't be changed / can be changed
//  Code should be immutable as much as possible

//  Pure Functions
//  Always return the same output from the same input

// const name = "Thomas";
// const fullName = name + " Faller";

// const addTwo = x => x + 2;
// // This will always return the same result

// let multi = 3;
// const addThree = x => x + multi;
// This will not always do the same

//  6.  Benefits of smaller functions

// const cart = ["10", "5", "15"];

// const SHIPPING_COSTS = 10;

// const fakeAPICharge = total => true;
// const fakeSendRecipt = total => true;

// const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);
// const getTotal = subTotal => subTotal + SHIPPING_COSTS;
// const sendReceipt = ({ email, total }) => fakeSendRecipt({ email, total });

// const checkout = cart => {
//   const subTotal = getSubTotal(cart);
//   const total = getTotal(subTotal);
//   const orderSuccess = fakeAPICharge(total);
//   if (orderSuccess) {
//     sendReceipt({
//       email: "fakeemail@gmail.com",
//       total
//     });
//   }
//   return orderSuccess;
// };
