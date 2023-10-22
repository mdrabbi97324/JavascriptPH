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

// Map

const productName = products.map(product => product.name)
console.log(productName)
const productPrice = products.map(product => product.priceInThousands)
console.log(productPrice)

// forEach 

products.forEach(product => console.log(product.name))
products.forEach(product => console.log(product.description))


// filter 

const cheap = products.filter(product => product.priceInThousands <= 50000).map(price => price.name)
console.log(cheap);

const specificName = products.filter(product =>product.name.includes('1'));
console.log(specificName)

// find 

const special = products.find(product => product.color.includes('R'))
console.log(special);
