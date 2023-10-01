const glass = {
    name: 'glass',
    color: 'Golden',
    price: 12,
    isCleaned: true

}

console.log(glass);

// bring properties or keys
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);


//bring key values

const values = Object.values(glass);
// [ 'glass', 'Golden', 12, true ]
console.log(values);


// bring key and value at once
const pair = Object.entries(glass)
console.log(pair);


// delete properties
// delete glass.name;
// console.log(glass);

const {price, ...glassRest} = glass;

console.log(glassRest);
console.log(glass);


Object.freeze(glass);
glass.price = 5000; // If we use freeze than it not change the price 
delete glass.price;
console.log(glass);

const obj = {
    name: 'anwar',
    city: {
        address: '15A'
    }
}

// Object.freeze(obj);
obj.city.address = '23A'
console.log(obj);

Object.seal(obj);
obj.name = 'hello'
delete obj.name ;
console.log(obj);

