function print(){
    return console.log('Hello World!');
}

print()

const print2 = () => console.log('print using arrow => function');
print2()


function value (x){
    return console.log('Value is ', x)
}

value(49)


const value2 = x => console.log('Value2 using => function ', x)
value2(29);


function add (x, y) {
    const sum = x + y;
    return sum;
}


// add(290, 6)
console.log(add(290, 6))


const add2 = (x, y) => {
    const sum = x + y;
    return sum;
}

console.log('This sum get using => function', add2(100, 200))


// Default value as a parameter in a function

const sum = (a=0, b=0) => a+b;

// console.log(sum(40)) // It will give NaN if i pass 1 value in multiple parameter 
// console.log(sum(40, 50)) // It will give value is 90;

console.log(sum()); // It will give zero because I use default parameter value as 0;

console.log(sum(66)); // It will give 66;
