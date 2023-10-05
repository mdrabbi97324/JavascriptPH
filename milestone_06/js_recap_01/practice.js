// 1.
const myFunction = (x, y, z) => x * y * z;

const result = myFunction(2, 2, 2);
console.log(result)

// 2.
const sentence =`I am a web developer.
I love to code.
I love to eat biriyani `

console.log(sentence);


// 3.
const arrFunction = (a, b = 25) => a + b;
console.log(arrFunction(7));

// 4.

const evenNameArrFunc = () => {
    let evenName = [];
    for(let i = 0; i < friends.length ; i++){
        const name = friends[i];
        if(name.length % 2 === 0){
            evenName.push(name)
        }
    }
    return evenName;
}

const friends = ['jame', 'jhond', 'chen', 'tigerfd', 'anarsofn', 'nma'];
console.log(evenNameArrFunc(friends));

// let evenName = [];
// let oddName = []
// for(let i=0; i < friends.length; i++){
//     const name = friends[i];
//     if(name.length % 2 == 0){
//         evenName.push(name);
//     }

//     else if(name.length % 2 !== 0){
//         oddName.push(name)
//     }
    
// }



// console.log(evenName);
// console.log(oddName);

// const name = () 


// 5. 


const square = () => {
    let sum = 0;
    for(let i=0; i<num.length; i++){
       const xSquare = Math.pow(num[i], 2)
        sum += xSquare;
    }
    const average = sum / num.length;
    console.log(sum, average);
    return average;
}

const num = [2, 3, 4, 5];

console.log(square(num));

// 6. 

const twoArray = (a, b) => {
    const merge = [...a, ...b];
    const maxNumber = Math.max(...merge);
    return maxNumber;
}

console.log(twoArray([1, 2, 3, 200], [4, 5, 6]));