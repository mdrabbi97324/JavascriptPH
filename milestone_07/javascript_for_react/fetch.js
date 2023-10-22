// 1. JSON stringify and parse

const student = {
  name: "Tiger",
  age: 32,
  movies: ["Bhag", "sundorBon"],
};

const stringified = JSON.stringify(student);
console.log(stringified);

const studentObj = JSON.parse(stringified);
console.log(studentObj);

// fetch("url")
//   .then((response) => response.json())
//   .then((data) => console.log(data))


// keys, values 

const keys = Object.keys(student)
const values = Object.values(student)

console.log('These are keys',keys);
console.log('These are values',values);



const products = [
    {
      name: "Product 1",
      description: "This is the first product.",
      priceInThousands: 232333,
      price: "$19.99",
      color: "Red",
      brandName: "Brand A",
    },
    {
      name: "Product 2",
      description: "A description for the second product.",
      priceInThousands: 20000,
      price: "$29.99",
      color: "Blue",
      brandName: "Brand B",
    },
    {
      name: "Product 3",
      description: "Product three is here.",
      priceInThousands: 100000,
      price: "$14.95",
      color: "Green",
      brandName: "Brand C",
    },
    {
      name: "Product 4",
      description: "Description for the fourth product.",
      priceInThousands: 50000,
      price: "$39.99",
      color: "Black",
      brandName: "Brand D",
    },
  ];



 const newProduct = {name: 'Product 5', description: 'This is new product', priceInThousands: 60000, price: '$40'}
 const newProducts = [...products, newProduct];// add product in array
 console.log(newProducts)

 const remaining = newProducts.filter(product => product.name !== 'Product 1')
 console.log(remaining);



//  practice 

const name = 'Hero';
const age = 34;
const person = {name, age}; console.log(person);

const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;


let person3 =null;
console.log(person3 ? person3 : "person is null");

const arr2 = 

  
