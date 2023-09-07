// Does exist inside the string using includes() function
//index of () and if else

//Startwith and endwith

const greeting = 'Hello ! Assalamualaikum wa rahmatullahi wabarakatuh Fi Amanillah Thank you';
let greetingLowerCase = greeting.toLowerCase();
// console.log(greetingLowerCase);
let searchString = 'Assalamualaikum';
let searchStringLower = searchString.toLowerCase();
console.log(greetingLowerCase.includes(searchStringLower));

const indexOfHello = greeting.indexOf('wa')
console.log(indexOfHello);
console.log(greeting.length);

console.log(greeting.endsWith('you'));
console.log(greeting.startsWith('Hello'))