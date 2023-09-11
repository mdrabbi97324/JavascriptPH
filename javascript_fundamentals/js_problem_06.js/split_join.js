// using split() we can seperate word and sentences also seperate all charecter
 
// slice() and substring and join()

const str = 'The quick brown fox jumps over. the lazy dog.'

/* console.log(str.length);
console.log(str.split(' '));// separate indivisual word
let strSentenceSplit = str.split('.');
console.log(strSentenceSplit); // separate sentences

let strCharecterSplit = str.split('');
console.log(strCharecterSplit);// separate all charecters

const words = str.split(' ');
console.log(words[5]); // give it a word

const chars = str.split('');
console.log(chars[1]);

const strCopy = str.split();
console.log(strCopy); */


/* console.log(str.slice(31));// slice(indexStart)

console.log(str.slice(0, 3));// slice(indexStart, indexEnd)

console.log(str.slice(-5, -1));
console.log(str.slice(1));

const str1 = "The morning is upon us." // The lenght of str1 is 23.
console.log(str1.length);
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5); */

// const arr = [200, 10, 25, 97];
const strSubstring = 'Mozilla';
// console.log(strSubstring[6]);

// console.log(strSubstring.substring(1, 3));
// console.log(strSubstring.substring(2));
// console.log(strSubstring.substring(0, 2));

// console.log(strSubstring.substring(strSubstring.length - 4));

/* console.log(strSubstring.substring(5, 2));
console.log(strSubstring.slice(5, 2));

console.log(strSubstring.substring(-5, 2));
console.log(strSubstring.substring(-5, -2)); */

/* console.log(strSubstring.slice(-5, 2));
console.log(strSubstring.slice(-5, -2));
 */
const elements = ['Fire', 'Air', 'Water'];

console.log(elements);
console.log(elements.join());
console.log(elements.join(' '));
console.log(elements.join('-'));


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix.join());
console.log(matrix.join(';'));

const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2

const a = ["Wind", "Water", "Fire"];
console.log(a.join()); // 'Wind,Water,Fire'
console.log(a.join(", ")); // 'Wind, Water, Fire'
console.log(a.join(" + ")); // 'Wind + Water + Fire'
console.log(a.join("")); // 'WindWaterFire'
