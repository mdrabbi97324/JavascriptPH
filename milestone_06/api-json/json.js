/* const user = {id:1, name: 'Abdur Razzak', job: 'actor'}
console.log(user)

// Javascript Object Notation : JSON

const objString = JSON.stringify(user);
console.log(objString);


const shop = {
    owner: 'Alia',
    address: {
        street: 'Kolabagan vooter bari',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'microphone', 'mouse'],
    revenue: 450000,
    isOpen: true,
    isNew: false

}

console.log(shop);

const shopString = JSON.stringify(shop)
console.log(shopString);

const shopStringParse =JSON.parse(shopString);
console.log(shopStringParse) */



const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo); 