var iphonePrice = 76000;
var myBudget = 9500;

/**
 * If iphone price is less than my budget 
 * I will by the Iphone
 * 
 * if(condition) {
 *  // will execute if the condition is true
 * }
 * 
 * 
 */

if (iphonePrice < myBudget) {
    console.log('I Will by the phone')
}
myBudget = 95000;
if (iphonePrice < myBudget ) {
    console.log('I will by the phone');
}

/**
 * If iphone price is less than my budget 
 * I will buy Iphone 
 * If iphone price is greater than my budget than 
 * I will buy Xiaomi Phone
 * 
 * if (condition) {
 *  // if the condition is true than this line is execute
 * }
 * 
 * else {
 *  // if the condition is false than this line is execute
 * }
 */
myBudget = 15000;
if (myBudget > iphonePrice ) {
    console.log('I will buy Iphone');
}

else {
    console.log("I don't buy Iphone, I will buy Xiaomi phone");
}