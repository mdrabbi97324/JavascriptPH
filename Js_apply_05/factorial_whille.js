// function factorial(number) {
//     let i = 1;
//     let result = 1;
//     while (i <= number) {
//         result = result * i;
//         i++;
//     }

//     return result;
// }

// console.log(factorial(7));


// Reverse factorial using while loop

function factorial(number) {
    let i = number;
    let output = 1;
    while (i >= 1) {
        output = output * i;
        i--;
    }
    return output;
}

console.log(factorial(7));