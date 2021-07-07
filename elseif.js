///...week
"use strict";

const ps = require("prompt-sync");
const prompt = ps();


// let number = prompt("enter the number ");
// if (number == 1)
//     console.log("Monday");
// else if (number == 2)
//     console.log("Tuesday");
// else if (number == 3)
//     console.log("Wednesday");
// else if (number == 4)
//     console.log("Thurday");
// else if (number == 5)
//     console.log("Friday");
// else if (number == 6)
//     console.log("Staturday");
// else if (number == 7)
//     console.log("Sunday");
// else
//     console.log("invalid");

//... display the number..!

// let word = prompt("enter the number ");
// if (word == 1)
//     console.log("one");
// else if (word == 2)
//     console.log("Two");
// else if (word == 3)
//     console.log("Three");
// else if (word == 4)
//     console.log("Four ");
// else if (word == 5)
//     console.log("Five");
// else if (word == 6)
//     console.log("Six");
// else if (word == 7)
//     console.log("Seven");
// else
//     console.log("InValid");
// //... find the tense

// let unit = prompt("enter the number ");
// if (unit <= 9)
//     console.log("once");
// else if (unit <= 99)
//     console.log("Tens");
// else if (unit <= 999)
//     console.log("Hundress");
// else if (unit <= 9999)
//     console.log("Thousands ");
// else if (unit < 99999)
//     console.log("TenThousand");
// else
//     console.log("enter the value under TenThousadn");
//... perfroming arithmatic  finding   bigger and smaller the number

// let a = prompt("enter A value ");
// let b = prompt("enter B value ");
// let c = prompt("enter C value ");


// let var1 = ((a + b) * c)
// let var2 = ((a % b) + c)
// let var3 = (c + (a / b))
// let var4 = ((a * b) + c)
// console.log(var1, var2, var3, var4);

// if ((var1 < var2) && (var1 < var3) && (var1 < var4)) {
//     console.log("var 1 is big ");
// }
// else if ((var2 < var1) && (var2 < var3) && (var2 < var4)) {
//     console.log(" var 2 is big");
// }
// else if ((var3 < var1) && (var3 < var2) && (var3 < var4)) {
//     console.log("var 3 is big");
// }
// else { console.log(" var 4 is big"); }


// if ((var1 > var2) && (var1 > $var3) && (var1 > var4)) {
//     console.log("var 1 is big ");
// }
// else if ((var2 > var1) && (var2 > var3) && (var2 > var4)) {
//     console.log(" var 2 is big");
// }
// else if ((var3 > var1) && (var3 > var2) && (var3 > var4)) {
//     console.log("var 3 is big");
// }
// else { console.log("var4 is small"); }


var arr = [23, 21, 34, 34];
var temp_arr = [...new Set(arr)].slice(0); //clone array
var second_largest_value = temp_arr.sort()[temp_arr.length - 2];
var index_of_largest_value = arr.indexOf(second_largest_value);

console.log(second_largest_value);
console.log(index_of_largest_value);