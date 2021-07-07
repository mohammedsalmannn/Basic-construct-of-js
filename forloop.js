"use strict";

const ps = require("prompt-sync");
const prompt = ps();
// let number = prompt("enter number");
// let power = 1;

// for (var i = number; i != 0; --i) {

//     power = (power * 2);
//     if (power < 256) {

//         console.log("Power 2 of n is--> " + power);
//     }
// }

//... finding the prime..!

// var count = 0;
// var zero = 0;
// //var result = 0
// var number = prompt("enter number");

// for (let i = number; i <= number; i++) {
//     let result = number % 2;
//     if (result == 0) {
//         console.log(" not  prime");
//     }
//     else { console.log(" prime"); }
// console.log("prime a number");
//}

//...Factorial of numbers

// let fact = 1
// let num = prompt("enter number");
// for (let i = 2; i <= num; i++) {
//     fact = (fact * i);
//     console.log("the factorial of " + num + " " + fact);
// }

//... range of numbers..!

let num = prompt("enter number");
for (let i = 0; i <= num; i++) {
    console.log(i);
    console.log("the numbers in the range of" + num);
}
