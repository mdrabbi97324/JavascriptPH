/* console.log(44/2);
console.log(53/2);
console.log(75%2);
console.log(84%2); */

function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

let myNumberEven = isEven(98);
let herNumberEven = isEven(117);

console.log(myNumberEven);
console.log(herNumberEven);
