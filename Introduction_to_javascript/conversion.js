// Some variable Conversion tricks

/* This one is wrong because we adding strings not numbers 
    that's why our value doesn't give expected value.*/

var price1 = '20';
var price2 = '30';
var totalPrice = price1 + price2;
console.log(totalPrice);

var price3 = 10;
var price4 = '30';
var total = price3 + price4;
console.log(total);

/* If we want we can change the variable type from one to another*/

var price4Number = parseInt(price4);
console.log(price4Number);

var price5 = '3.5';
console.log(price5);

var price5Float = parseFloat(price5);
console.log(price5Float);