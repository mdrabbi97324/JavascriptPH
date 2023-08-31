/* var myComputer = {
    Brand: 'Value top',
    Monitor: 'Walton',
    Processor: 'core-i3',
    Ram: '4GB',
    SSD: '110GB'
}

// console.log(myComputer);
// myComputer.Ram = '8GB';
// console.log(myComputer);
// myComputer.SSD['120GB'];
// console.log(myComputer);

var person = {
    age: 36,
    name: 'summit'
}

person.country = 'Bangladesh'
console.log(person);

console.log(person.age);
console.log(person['age']);
var a = 'age';

console.log(person['age']);

delete person.name;

delete person['name'];
console.log(person);   */  

var shoppingCart = {
    book: 3,
    icecream: '5 pcs',
    pen: '2 pcs',
    notebook: 1,
    oil: '2 ltr'
}

console.log(shoppingCart);
var properties = Object.keys(shoppingCart);
console.log(properties);
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

shoppingCart.notebook = 7;
shoppingCart.oil = 8;
console.log(shoppingCart);


