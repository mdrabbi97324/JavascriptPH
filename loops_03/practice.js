
/*  *-------------
 Loop
 -------------- */

/* //  1. Display "Ajke amar mon valo nei" for 39 times
var i = 0;
while (i <= 39) {
    console.log('Ajke amar mon valo nei');
    i++
} */


//  2. Display Numbers between 58 to 98
for (var i=0; i<98; i++) {
    if (i <= 58) {
        continue;
    }
    // console.log(i);
}
//  3. Show all even numbers from 412 to 456

for (var i=412; i<=456; i+=2) {
    // console.log(i);
}
//  4. show all odd numbers 581 to 599

for (var i=581; i<=599; i+=2) {
    // console.log(i);
}




//  5. difference between while loop and for loop

/*
Both for loop and while loop is used to execute the statements repeatedly while the program runs. The major difference between for loop and the while loop is that for loop is used when the number of iterations is known, whereas execution is done in the while loop until the statement in the program is proved wrong.
*/


//  6. Declare an array for all the topics that you have learned
//  last few days

var learnedTopics = ['html', 'css', 'tailwind', 'Javascript'];
//  7. Create an array for all the mobile phones. Display all the elements of the array
//  by using a while loop

var mobilePhones = ['proton', 'xiaomi', 'samsung', 'oppo', 'symphony', 'itel', 'techno'];

var i=0;
while (i<mobilePhones.length) {
    phoneIndex = mobilePhones[i];
    // console.log(phoneIndex);
    i++
}
for (var i=0; i<mobilePhones.length; i++){
    phoneIndex = mobilePhones[i];
    // console.log(phoneIndex);
}
//  8. run a loop from 30 to 86.. This loop will stop if the values get
//   higher 43

for (var i=30; i < 86; i++) {
    if(i > 43) { break; }
    // console.log(i);
}
//   9. write the price of the books. that you have
//   display the prices if the prices is lower than 200.

var bookPrice = [150, 250, 220, 130, 80, 30, 75];

for (var i=0; i<bookPrice.length; i++){
    var priceIndex = bookPrice[i];
    if(priceIndex > 200) { continue; }
    // console.log(priceIndex);
}

var i=0;
while (i<bookPrice.length) {
    var priceIndex = bookPrice[i];
    i++
    if(priceIndex > 200) { continue; }
    console.log(priceIndex);

}

/* var name = false;
console.log(typeof(name));

var i = 5;

for (; i < 5; i++) {
 console.log(i);
} */
var i = 0;
for (i=0; i<5; i++){
};
console.log(i);





