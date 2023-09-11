// if you assign variable using const you can't change this name or value again
// let ==> we can re-assign value but we can't re-declare it
// dot notation and bracket notation

const person = {
    name: 'mehedy',
    age: 26,
    number: '12342334',
    address: 'Rajshahi'

}

// console.log(person.age);
// console.log(person['number']);
// const x = 'address';
// console.log(person[x]);

const keys = Object.keys(person);
const values = Object.values(person);

// console.log(keys);
// console.log(values);


// Example Using for loop

// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     console.log(person[key]);
// }

// for (const key of keys) {
//     console.log(person[key]);
// }

/* for (const i in person) {
    console.log(i);
    console.log(person[i]);
} */

/* 
There should be type of parameters
1. No parameter, no return
2. parameter with no return
3. no parameter with return
4. parameters with return
*/

//  Some problem solve
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfOdds(num){
    let sum = 0;
    for (const item of num) {
    if(item % 2 === 1) {
        sum = sum + item;
    }  
    }
    return sum;
}


// const total = sumOfOdds(numbers);
// console.log(total);


function findVowel(s){
    let vowel = 0;
    let consonent = 0;
    let space = 0;

    if(typeof s !== 'string'){
        return 'Please give string';
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
            vowel ++;
    }
    else if (char !== ' '){
        consonent++;
    }
    else {
        space++;
    }
     }
    const obj = {
        vowel: vowel,
        consonent: consonent,
        space: space
    }
    return obj;
}

const sentence = 'What are you doing'
console.log(findVowel(sentence));