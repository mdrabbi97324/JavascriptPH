/**
 * Example of while loop
 * 1. loop variable
 * 2. condition after while keyword
 * 3. loop body
 * 4. loop increment or decrement otherwise loop will make infinite loop
 */

// To show numbers from 0 to 10 using while loop

/*
var numbers = 0;

while (numbers <= 10) {
    console.log(numbers);
    numbers++
}
*/


// To show all even numbers from 2 to 10 using while loop

var numbers = 2;

while (numbers <= 10) {
    console.log(numbers);
    numbers = numbers + 2
}


console.log('break');
// To show all odd numbers from 1 to 10 using while loop

var num = 1;

while (num <= 10) {
    console.log(num);
    num = num + 2
}
