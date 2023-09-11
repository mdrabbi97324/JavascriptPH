//simple cases
/* console.log(Math.pow(2, 2)); // math.pow
console.log(Math.pow(2, 3)); // math.pow
console.log(Math.pow(2, 10)); // math.pow

// Fraction exponents
console.log(Math.pow(4, 0.5)); // (square root of 4)
console.log(Math.pow(8, 1/3)); // (cube root of 4)

console.log(Math.pow(5/8, -2));// negative exponent
console.log(Math.pow(-2, -3));// negative base and negative exponent */

// math.abs

const num1 = 25;
const num2 = 45;

const result = Math.abs(num1 - num2);
console.log(result);
if (result < 5) {
    console.log('amra ak sathe jabo');
}

else {
    console.log('amra ak sathe jabo na, alada jabo');
}

function difference(a, b) {
    return Math.abs(a - b);
}

console.log(difference(3, 5));
console.log(difference(5, 3));
console.log(difference(1.23456, 7.89012));
console.log(Math.abs(0));

//math.round

console.log(Math.round(0.9));
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
console.log(Math.round(-5.95), Math.round(-5.5), Math.round(-5.05));


// math.ceil

console.log(Math.ceil(18.2));


//math.floor

console.log(Math.floor(25.99));

//Math.random

console.log(Math.random())

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

console.log(getRandomInt(3))
console.log(getRandomInt());

console.log(Math.round(Math.random() * 4));