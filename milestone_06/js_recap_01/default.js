function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const sum = add(10)

// Template literall
function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full
}

const first = 'Golam';
const last = 'Rabbi';

const fullName2 = first + ' ' + last;
console.log(fullName2);

const a = 5;
const b = 10;

const addition = 'The sum of ' + a + ' and ' + b + ' equal ' + (a+b);
console.log(addition);

const sumBackTick = `The sum of ${a} and ${b} equal ${a+b}`;
console.log(sumBackTick);

const text = 'What are you doing now? \n I am doing coding now this moment '
console.log(text);

