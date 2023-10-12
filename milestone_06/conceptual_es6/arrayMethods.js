// forEach(), map(), find(), filter(), reduce()


// forEach()
const arr = [1, 2, 3];
// const a = x => console.log(x);
// arr.forEach(a);
arr.forEach(x => console.log(x));

let sum = 0;
arr.forEach(x => sum += x);
console.log('Get sum using forEach :', sum)

// map()

const a = arr.map(item => item);
console.log(a);
const d = arr.forEach(item => item);
console.log(d);
// const b = arr.forEach((item, index, arr) => console.log(item,index,arr));
// const c = arr.map((item, index, arr) => console.log(item,index,arr));

const fruits = ['mango', 'bango', 'fango', 'dango', 'tango', 'bango','tango'];

const fruit = fruits.map(x => x);
console.log(fruit);

// fruits.forEach((x, index, arr) => console.log(x, index, arr));



// find


function find(fruits){
    for(let item of fruits){
        if(item === 'tango')
        return item;
    }
}

const x = find(fruits);
console.log(x);

const y = fruits.find(item => item === 'bango');
console.log(y);


// filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 700];
const numbers = [1,3,5,7,9]

function even (numbers){
    let evenNumber = [];
    for(let item of numbers){
        if(item%2 === 0){
            evenNumber.push(item);
        }
    }
    return evenNumber;
}

console.log(even(numbers));

const evenNum = numbers.filter(item => item%2 === 0);
console.log(evenNum);





// Reduce 

const num = [1, 2, 3, 4, 5];

const sum1 = num.reduce((accu, curr) => accu + curr, 0);
console.log(sum1)
const multi = num.reduce((accu, curr) => accu * curr, 1);
console.log(multi)




