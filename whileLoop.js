// "use strict";

// const ps = require("prompt-sync");
// const prompt = ps();

// let power = 1;
// let number = Number(prompt("Enter number : "));
// let i = number;
// while (i != 0) {

//     power = (power * 2);
//     if (power < 256) {

//         console.log("Power 2 of n is--> " + power);
//     } --i
//}

//.. count the head and tail cont..!

let flips = 0
let limit = 11
let head = 0
let tail = 0
while (flips >= 0 && head < limit && tail < limit) {
    let coinflip = Math.floor(Math.random() * 2)
    if (coinflip == 0)
        head += 1;
    else
        tail += 1;
    flips = flips + 1;
}
console.log("Total Flips = " + flips);
console.log("Toatl num of time head wins--> " + head);
console.log("Toatl num of time tails--> " + tail);