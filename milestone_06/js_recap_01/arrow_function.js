// Regular Function


// function add(a, b){
//     const sum = a + b;
//     return sum;
// }
function add(a, b){
    return a + b;
}

const result = add(5, 92);
console.log(result);

// Function Expression

const add2 = function(a, b){
    return a+b;
}

// Arrow Function 

const add3 = (a, b) => a + b;

const sum = add3(2, 9);

console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyNum = multiply(2, 3, 5);
console.log(multiplyNum);

// single parameter
const getAge = (person) => person.age;
const student = {name: 'kibriya', age: 45}
const age = getAge(student);
console.log(age)

const getName = (person) => person.name;
const name = getName(student);
console.log(name);

const getThird = numbers => numbers[0];
const third = getThird([290, 125, 200, 590, 55])
console.log(third);

// no parameter

const getPI = () => parseFloat(Math.PI.toFixed(2));
console.log(getPI())


// large arrow function 

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}

console.log(doMath(2,2,2));





