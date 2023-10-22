//1.  How to declare a variable using let and const

const fatherName = 'Jhon';
let season = 'rainy';
season = 'winter';
console.log(season);


// 2.6 basic condition >, < , ===, !==, <=, >=
// multiple condition : &&, ||

if(fatherName === 'arnold' || season === 'rainy'){
    console.log("These are correct")
}

else if(fatherName === 'Jhon') {
    console.log('Father Name is correct')
}

else {
    console.log('These are all incorrect')
}

// 3. array declare 
// index, length, push, pop, shift, unshift;

const numbers = [2, 3, 4, 5, 25];
numbers[0] = 36 // change index 0 as 36;
numbers.push(22);// add 22 in numbers array
console.log(numbers);
numbers.shift()
console.log(numbers);

// 4. for loop and while loop

for(let i=0; i<numbers.length; i++){
    const number  = numbers[i];
    console.log(number)
}

// 5. function ex: multiply

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 2);



// 6. object ex: student
// Three way to access property by name property, property name string , variable proparty

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

console.log(student.address.street);