/* console.log(Math.round(Math.random() * 10));
console.log(Math.random() * 10);

function add(a, b) {
    return a + b;
}

console.log(add('adam' + 'eve'))

// what would be the output?

const number = -78; 
const answer = Math.abs(number); 
console.log(answer);

// Which condition will print hello?

var a = 2; 
var b = 3; 
if(a < b){
	console.log("Hello");
}


var stringTypeVariable = 'student';
var booleanTypeVariable = true;
var numberTypeVariable = 26;

var x = 10;
var y = 5;
var total = x + y;
console.log(total);

var division = x - y;
console.log(division);

var toGreater = x > y;

console.log(toGreater);

if (x == y && x > y) {
    console.log(true);
}

else {
    console.log(false);
}
if (x == y || x > y) {
    console.log(true);
}

else {
    console.log(false);
} */

// for (let i = 7; i <=19; i = i + 2) {
//     console.log(i);
// }

/* let i = 7;

while (i <= 19) {
    console.log(i);
    i += 2;
} */

/* const arr = [29, 22, 35, 46, 89, 55, 29, 59];
console.log(arr.length);

arr[3] = 100;

console.log(arr);

const additionArr = arr[1] + arr[2];
console.log(additionArr);

arr.pop();
console.log(arr); // 59 out 

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
} */
const arr = [29, 22, 35, 46, 89, 55, 29, 59, 100, 200];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 80) {
        console.log(element);
    }
    
}

function multiplyThreeNumber(num1, num2, num3) {
    return num1 * num2 * num3 ;
}

const result = multiplyThreeNumber(2, 3, 4);
console.log(result);


const anObject = {
    mobile : 5,
    notebook : 3,
    pen : 8
}

anObject.notebook = 20;

console.log(anObject);

const myObject = {
    oldPropertyName: 'some value',
  };
  
  // Create a new property with the desired name and copy the value
  myObject.newPropertyName = myObject.oldPropertyName;
  
  // Delete the old property if needed
  delete myObject.oldPropertyName;
  
  console.log(myObject);