const arr = [2, 3, 4, 5];
const arr2 = [...arr]

arr.push(75);
arr2.push(20, 75);

console.log(arr);
console.log(arr2);


// Array Destructuring 

const arr3 = [1, 3, 4, 5, 6, 7];

console.log(arr3[1])

const [a, b, ...c]  = arr3

console.log(a,b, c)