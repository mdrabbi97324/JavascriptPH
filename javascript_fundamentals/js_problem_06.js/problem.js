// string length
// get string using index
// we can't change string using index because strings are immutable

// mutable and immutable important
// uppercase and lowercase

const myAddress = '23/A, House-6, Gulshan-1212';
console.log(myAddress);
console.log(myAddress.length);
console.log(myAddress[3]);

const userName = 'blankpink';
const userInput = 'Blankpink';

// if (userName === userInput) {  // That output give invalid user
if (userName.toLowerCase() === userInput.toLowerCase()) { //This one give valid user 
    console.log('valid user')
}

else {
    console.log('invalid user')
}

console.log(userName.toUpperCase());
console.log(userInput.toLowerCase())
