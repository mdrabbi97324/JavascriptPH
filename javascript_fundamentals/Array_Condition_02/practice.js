// practice problem 1

var fruits = [ 'Apple', 'Banana', 'Orange']

console.log(fruits.indexOf('Banana')); // get the index number of Banana

fruits[1] = 'Mango'; // Replace the Banana with Mango
console.log(fruits)

fruits.pop(); // Remove the last element of fruits array
console.log(fruits);

fruits.push('Watermelon'); // insert a element at the end of fruits array
console.log(fruits);

// practice problem 2

var Me = 85;
var Tom = 66;
var Jane = 95;
var Jhon = 40;

if (Me >= 80) {
    console.log('A');
}

else if (Me >= 60) {
    console.log('B');
}

else if (Me >= 50) {
    console.log('C');
}

else if (Me >= 40) {
    console.log('D');
}

else if (Me <= 39) {
    console.log('F');
}

// Tom
if (Tom >= 80) {
    console.log('A');
}

else if (Tom >= 60) {
    console.log('B');
}

else if (Tom >= 50) {
    console.log('C');
}

else if (Tom >= 40) {
    console.log('D');
}

else if (Tom <= 39) {
    console.log('F');
}

// Jane
if (Jane >= 80) {
    console.log('A');
}

else if (Jane >= 60) {
    console.log('B');
}

else if (Jane >= 50) {
    console.log('C');
}

else if (Jane >= 40) {
    console.log('D');
}

else if (Jane <= 39) {
    console.log('F');
}

// Jhon
if (Jhon >= 80) {
    console.log('A');
}

else if (Jhon >= 60) {
    console.log('B');
}

else if (Jhon >= 50) {
    console.log('C');
}

else if (Jhon >= 40) {
    console.log('D');
}

else if (Jhon <= 39) {
    console.log('F');
}

// Practice 3 
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 >= num2 && num1 >= num3) {
    console.log(nu1);
}

else if (num2 >= num1 && num2 >= num3) {
    console.log(num2);
}

else {
    console.log(num3);
}