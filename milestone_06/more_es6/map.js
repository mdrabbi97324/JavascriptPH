const numbers = [2, 3, 4, 5, 6, 7, 8];

function doubled(num){
    return num * 2;
}

const triple = num => num * 3


const doubleIt = numbers.map(triple);
// console.log(doubleIt)


const multiplyByFour = numbers.map(num => num * 4);
console.log(multiplyByFour);

// const doubled = [];
// for (const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled);

const fiveBonus = numbers.map(n => n + 5);
console.log(fiveBonus)

const friends = ['apu', 'topu', 'dipu', 'milton', 'liton']

const eachName = friends.map(f => f);
const length = friends.map(f => f.length);
console.log(eachName);
console.log(length);