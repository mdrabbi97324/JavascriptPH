/* let first = 5;
let second = 7; */

// console.log(first, second);

/* // wrong approach
first = second;
second = first; */

// console.log(first, second);

// first approch to solve this problem using declare a variablel

// const temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// Second approach is Destructuring 

/* [first, second] = [second, first];
console.log(first, second); */

/* function getMax(jim, dela, chinku) {
    return Math.max(jim, dela, chinku);
}

console.log(getMax(55, 67, 99));

function getMin(jim, dela, chinku) {
    return Math.min(jim, dela, chinku);
}

console.log(getMin(39, 45, 77));

 let a = 94;
 let b = 96;
 let c = 93;

 if (a > b && a > c) {
    console.log('This is a max number :', a)
 }

 else if (b > a && b > c) {
    console.log('This is the max number :', b);
 }

 else {
    console.log('This is the max number :', c);
 }

 console.log(Math.max(a, b, c));
 console.log(Math.min(a, b, c)); */

 function maxInArray(number){
     let largest = number[0];
     for (let i = 0; i < number.length; i++) {
        const element = number[i];
        // console.log(element);
        if (element > largest) {
            largest = element;
        }
        
    }
    return `largest is : ${largest}`;
 }


 const heights = [155, 167, 560, 265, 290, 188, 99];
 const tallest = maxInArray(heights);
 console.log(tallest);


 function minInArray(number) {
    let smallest = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return `Smallest is : ${smallest}`
 }

const smallest = minInArray(heights);
console.log(smallest);

