let singledigit = Math.floor(Math.random() * 10);
console.log("Single digit number ---> " + singledigit);
//...die 1 to 6

let die = Math.floor(Math.random() * 5) + 1;
console.log("\n die value ---> " + die);

//...Add to random die and print the value

let die2 = Math.floor(Math.random() * 5) + 1;
console.log("\n die2 value ---> " + die2);
console.log("\nadditon of two die--->" + (die + die2));

//.. Random 5 digit value and find their sum and avrge

numbers = Math.floor(Math.random() * 99) + Math.floor(Math.random() * 99) + Math.floor(Math.random() * 99) + Math.floor(Math.random() * 99) + Math.floor(Math.random() * 99);
// var iterator = numbers.values();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

console.log("avrg---> " + numbers / 5);
console.log(numbers);