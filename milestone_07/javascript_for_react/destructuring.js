// Array Destructuring 

const numbers = [92, 55];
// const  x = numbers[0];
// const y = numbers[1];

// const [x, y] = [92, 55];

const [x, y] = numbers;
console.log(x, y)

function boxify(num1, num2) {
    const arr = [num1, num2]
    return arr
}

const output = boxify(22, 33);
const [a, b] = boxify(44, 47);
console.log(a, b)

console.log('-----object destructuring start now----------')
// object Destructuring 

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  // Extract specific properties into variables

const {firstName, lastName, age} = person;
console.log(firstName);
console.log(lastName);


const user = {
    name: 'Alice',
    email: 'alice@example.com'
  };
  
  // Renaming variables during destructuring

  const {name : userName, email : userEmail} = user;
  console.log(userName)
  console.log(userEmail)

  const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  };
  
  // Providing default values

  const {title, author, genre = 'unknown'} = book;
  console.log(title, author, genre)



  const person2 = {
    name: 'Vatia',
    address: {
      city: 'New York',
      zipCode: '10001'
    }
  };
  
  // Destructuring a nested object

  const {name, address:{city, zipCode}} = person2;
  console.log(name, city, zipCode);

  const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver'
  };
  
  // Using the rest operator to capture the remaining properties

  const {make, model, ...other} = car;
  console.log(other)