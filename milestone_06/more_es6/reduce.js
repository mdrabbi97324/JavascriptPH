const products = [
    { id: 1, price: 190000, brand: 'Apple', quantity: 2 },
    { id: 2, price: 290000, brand: 'Samsung', quantity: 4 },
    { id: 3, price: 140000, brand: 'Google', quantity: 3 },
    { id: 4, price: 90000, brand: 'Microsoft', quantity: 1 },
    { id: 5, price: 240000, brand: 'Sony', quantity: 5 },
  ];

//   console.log(products)

// Map 

const discountPrice = products.map(p => ({...p, discountedPrice: p.price - 5}));
// console.log(discountPrice);

const totalPricePerProduct = products.map(product => ({...product, total: product.price * product.quantity }))
// console.log(totalPricePerProduct)


const events = [
    { id: 1, name: 'Conference', date: '2023-11-15T09:00:00Z' },
    { id: 2, name: 'Workshop', date: '2023-12-02T14:30:00Z' },
    { id: 3, name: 'Seminar', date: '2024-01-10T13:15:00Z' },
  ];

  const formattedEvents = events.map(event => ({...event, formattedDate: new Date(event.date).toLocaleDateString()}))
//   console.log(formattedEvents)


// forEach 

// const id = products.forEach(product => console.log(product.id));


// filter

const expensive = products.filter(product => product.price > 150000);
// console.log(expensive)


// find 
const affordable = products.find(product => product.price < 150000)
console.log(affordable)



// Reduce

const numbers = [1, 2, 200, 3, 4, 5];

const sum = numbers.reduce((accumulate,currentValue) => accumulate + currentValue, 0)
console.log(sum)

const max = numbers.reduce((accumulate, currentValue) => Math.max(accumulate, currentValue), -Infinity)
console.log(max)

const min = numbers.reduce((accumulate, currentValue) => Math.min(accumulate, currentValue), Infinity)
console.log(min)