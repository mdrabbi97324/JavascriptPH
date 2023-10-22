// object Spreading

const obj = {
    name : 'anwar',
    age : 35,
    desciption: 'He ia a good man',
    graduated : true
}

// const obj2 = obj;
const obj2 = {...obj};

obj2.address = 'Rajshahi'

console.log('This is first :',obj);
console.log('This is second :',obj2);



// object Destructuring 

const cart = {
    mobile : 5,
    computer: 3,
    location : 'Purana Polton' 
}


const {mobile, ...rest} = cart;
// console.log('Total mobile is',mobile, 'location is', location);
console.log(mobile, rest)


// object Accessing 

const dummyObject = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    },
    hobbies: ["Reading", "Hiking", "Gaming"],
    friends: [
      {
        name: "Alice",
        age: 28
      },
      {
        name: "Bob",
        age: 32
      }
    ]
  };
  

  console.log('Name is :', dummyObject.name);
  console.log('City is :', dummyObject.address.city);
  console.log('Last hobbie is :', dummyObject.hobbies[dummyObject.hobbies.length-1]);



