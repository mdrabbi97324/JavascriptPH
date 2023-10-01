// var : no reason to use var 
// let : allow to it reassign
// const : Do not allow to reassign but can be change inside value of an array or an object;

const number = 25;
// number = 50; we can't reassing this value
const add = number + 50;

console.log(add);

let count = 6;
count = 10;
console.log(count);



let sum = 0;
for(let i = 0; i < 10 ; i++){
    sum = sum + i;
    console.log(sum)
}

const arr = [32, 22, 44, 55]

// arr = [23, 22, 534] we can't
arr[2] = 120;
arr[3] = 290;
arr.push(54, 90, 84, 9);
arr.pop()

console.log(arr)

