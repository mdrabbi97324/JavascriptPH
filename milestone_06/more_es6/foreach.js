const numbers = [1, 2, 3, 4, 5, 6, 7];

// const number = numbers.forEach(num => console.log(num));
// console.log(number);


// Filter method

const count = [1, 3, 5, 6, 8, 9];
const players = [29, 44, 60, 48, 55, 66, 99, 77];

// const selected = players.filter(p => p < 50);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1 )
console.log(selected);


const friends = ['anarson', 'saikot', 'partho', 'richil', 'apu'];
const oddFriend = friends.filter(friend => friend.length > 4);
console.log(oddFriend);

// Find method

const serials = [1, 3, 5, 8 , 11, 13, 16];
const firstEven = serials.find(serial => serial % 2 ===0);
console.log(firstEven);

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const targetUser = users.find(user => user.id === 3);
console.log(targetUser);

const fruits = ['apple', 'banana', 'cherry', 'date'];

const targetFruit = fruits.find(fruit => fruit.length > 5);
console.log(targetFruit)
