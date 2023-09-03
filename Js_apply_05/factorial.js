// 1*2*3*4*5
/* let multiplication = 1;
for (let i = 1; i <=5; i++) {
     multiplication = multiplication * i;
}
console.log(multiplication); */

// function factorial(number) {
//     multiplication = 1;
//     for (let i = 1; i <=number; i++) {
//         multiplication = multiplication * i;
//     }
//     return multiplication;
// }

// const result = factorial(9)
// console.log(result);


//Factorial Reverse
function reverseFactorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }

    return result;
}

console.log('Reverse Factorial of 4:', reverseFactorial(4));