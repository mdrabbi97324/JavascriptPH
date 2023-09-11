var mobile = {brand:'Techno', price:13000, ram: '8GB', processor: 'unisocT606'}

// console.log(mobile);

var anarson = {
    Identity: 'Male',
    Location: 'Nodda',
    Work: 'Navana',
    Age: '24'

}

// console.log(anarson.Identity);

// const products = [24, 39, 45, 76, 89, 92];

// for (let product of products){
//     console.log(product);
// }

const products = [
    {id: 1, name: 'Walton Phone', price: 12000},
    {id: 2, name: 'Dalton Phone', price: 16000},
    {id: 3, name: 'iPhone', price: 120000},
    {id: 4, name: 'Macbook air laptop', price: 36000},
    {id: 5, name: 'lenovo E570 LapTop', price: 28000},
    {id: 6, name: 'Motorola phone', price: 56000},
    {id: 7, name: 'Monitor', price: 18000}
]

// for (let product of products) {
//     console.log(product);
// }

function matchProducts(products, search) {
    let matched = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchProducts(products, 'laptop');
console.log(result);

console.log(0/0);

function compare(a, b) {
    if (a == b) {
    return true;
    } else {
    return false;
    }
   }
   const arr = compare(15, "15");
   console.log(arr);

   function compare(a, b) {
    if (a.toString() === b) {
    return true;
    } else {
    return false;
    }
   }
   const arr2 = compare(25, 25);
   console.log(arr2);

   console.log('123' + 123);

let a = 'hi'
let b = 'there'
console.log(a+b);