// var a = Math.floor(Math.random() * 99) * 10;
// var b = Math.floor(Math.random() * 99) * 10;
// var c = Math.floor(Math.random() * 99) * 10;
// var d = Math.floor(Math.random() * 99) * 10;
// var f = Math.floor(Math.random() * 99) * 10;

// console.log("num1--> " + a);
// console.log("num2--> " + b);
// console.log("num3--> " + c);
// console.log("num4--> " + d);
// console.log("num5--> " + f);


// if (a > b && a > c && a > d && a > f) {
//     console.log("\nbigest--> " + a);
// }
// else if (b > a && b > c && b > d && b > f) {
//     console.log("\nbigest-->" + b);
// }
// else if (c > a && c > b && c > d && c > f) {
//     console.log("\nbigest-->" + c);
// }
// else if (d > a && d > c && d > b && d > f) {
//     console.log("\nbigest-->" + d);
// }
// else {
//     console.log("\nbigest-->" + f);
// }

// //.... finding mimim

// console.log("\n\nFinding the smallest number");

// var a = Math.floor(Math.random() * 99) * 10;
// var b = Math.floor(Math.random() * 99) * 10;
// var c = Math.floor(Math.random() * 99) * 10;
// var d = Math.floor(Math.random() * 99) * 10;
// var f = Math.floor(Math.random() * 99) * 10;

// console.log("\n\nnum1--> " + a);
// console.log("num2--> " + b);
// console.log("num3--> " + c);
// console.log("num4--> " + d);
// console.log("num5--> " + f);


// if (a < b && a < c && a < d && a < f) {
//     console.log("\nsmallest --> " + a);
// }
// else if (b < a && b < c && b < d && b < f) {
//     console.log("\nsmallest --> " + b);
// }
// else if (c < a && c < b && c < d && c < f) {
//     console.log("\nsmallest --> " + c);
// }
// else if (d < a && d < c && d < b && d < f) {
//     console.log("\nsmallest --> " + d);
// }
// else {
//     console.log("\nsmallest --> " + f);
// }


// // 

"use strict";

const ps = require("prompt-sync");
const prompt = ps();
// // let name = prompt("enter ur name--> ")
// // console.log(name);

// var date = prompt("enter the date--> ")
// var month = prompt("enter the month --> ")

// if ((month <= 6 & date <= 20) && (month >= 3 & month < 6) & (date < 31))
//     console.log("True");
// else
//     console.log("false");

//.... find the leap year..!    

// var year = prompt("enter the year--> ")

// if ((year % 4) != 0) {
//     console.log("false");
// }
// else console.log("true");

//...to check head or tail

let head = Math.floor(Math.random() * 2);
console.log(head);

if (head == 0) { console.log("head"); }
else { console.log("tail"); }