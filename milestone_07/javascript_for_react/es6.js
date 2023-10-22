const student = {
    name: 'Akmol',
    age : 23,
    works : ['helveshia', 'kludio', 'wokaway'],
    address : {
        city : 'Dhaka',
        street: '16A, Gulshan-1',
        country: 'Bangladesh',
        isMaried: false
    }
}

const numbers = [2, 3, 4, 5, 25];




// Template string 

const descriptionAkmol = `Hi, My name is ${student.name}. I'm ${student.age} years old. I have worked some renowned company these are 
${student.works.join(', ')}.`
console.log(descriptionAkmol);

// arrow funtion
const noParameter = () => 5;
const singleParameter = x => x + x ;
const oddNumber = x => x%2 === 0;
const multiply = (x, y) => x * y;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum
}

// spread operator

const newNumbers = [...numbers];
numbers.push(29)
const currentNumbers = [...numbers, 55];

console.log(newNumbers);
console.log(currentNumbers);
