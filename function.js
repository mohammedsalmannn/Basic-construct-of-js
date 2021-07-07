// function palindromes(num, num1) {
//     //let num=1
//     //let num1=2
//     let limit = 10
//     let sd = 0
//     let rev = 0

//     while (num > 0 && sd < limit) {
//         if (num > 0) {
//             sd = Math.trunc(num % 10)
//             // console.log(sd + " sd")
//             rev = Math.trunc(rev * 10 + sd)
//             //console.log(rev + " rev")
//             num = Math.trunc(num / 10)
//             //console.log(num + " num")
//         }
//     }
//     if (rev == num1)
//         return "palindrome"
//     else
//         return "not palindrome"
// }
// const prompt = require('prompt-sync')();

// let number1 = Number(prompt("Enter a number 1 : "));
// let number2 = Number(prompt("Enter a number 2 : "));

// check = palindromes(number1, number2)
// console.log(check)

function prime(number) {

    let flag = 0
    for (count = 1; count < number; count++) {
        if ((number % 2) == 0) {
            flag = 1
            break
        }
    }
    if (flag == 0)
        return "This number is prime"
    else
        return "This number is not prime"
}

function palindromes(num) {
    const limit = 10
    let sd = 0
    let rev = 0
    let num1 = num

    while (num > 0 && sd < limit) {
        if (num > 0) {
            sd = Math.trunc(num % 10)
            rev = Math.trunc(rev * 10 + sd)
            num = Math.trunc(num / 10)
        }
    }
    if (rev == num1)
        return "palindrome"
    else
        return "not palindrome"
}

const prompt = require('prompt-sync')();
let num = Number(prompt("Enter number : "));

primenumber = prime(num)
console.log(primenumber)
check = palindromes(num)
console.log(check)