const numbers = [1, 3, 4, 6, 9, 8];

for(const num of numbers){
    console.log(num);
}

const sentence = 'What are you doing now?';
for(const char of sentence){
    console.log(char);
}

const obj = {
    name: 'Partho',
    address: 'Farmgate',
    salary: 10000,
    type: 'cook'
}

// for(const key in obj){
//     const values = obj[key];
//     console.log(key, values);
// }

const values = Object.values(obj);
const keys = Object.keys(obj)
// console.log(keys, values);

for(const key of keys){
    console.log(key);
}
