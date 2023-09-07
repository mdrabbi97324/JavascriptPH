/* 
const friends = [22, 29, 35, 39, 44, 57, 68, 77, 82, 82, 29];
const partial = friends.slice(2, 5);
console.log(partial); // give the slicing output
console.log(friends); // original variable doesn't change;

*/



const friends = [22, 29, 35, 39, 44, 57, 68, 77, 82, 82, 29];
console.log(friends);
// const partial = friends.splice(2, 2);
// const partial = friends.splice(2, 8, 'hello', 'how', 'are')
const partial = friends.splice(2, 1, 'aita');
console.log(partial);
console.log(friends); // original value change if use splice



