const numbers = [1, 2, 3];
const addNumber = [...numbers, 4, 5, 6]
// console.log(addNumber);


const num1 = [4, 5, 6];
const a = [...num1];
a.push(22)
console.log(a);
console.log(num1)


const max = Math.max(5, 234, 22, 33, 53, 93);
const numbers1 = [2, 3, 4, 5, 6, 7, 8, 9, 22, 33, 22];
// const arrayMax = Math.max(numbers1); // This will give an error as NaN
const arrayMax = Math.max(...numbers1);
console.log(max);
console.log(arrayMax);