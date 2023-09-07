const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 12, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof friends);
console.log(typeof add);

// ---------------------
console.log(friends.includes(13));
console.log(friends.includes(21));

// another way to 

if (friends.indexOf(252) !== -1 ) {
    console.log(true);
}

else {
    console.log(false);
}

console.log(friends.indexOf(212));

// Concatenate
const newFriendsAge = [12, 13, 15, 45];
const allFriendsAge = friends.concat(newFriendsAge);
// const allFriendsAge = newFriendsAge.concat(friends);
console.log(allFriendsAge);

