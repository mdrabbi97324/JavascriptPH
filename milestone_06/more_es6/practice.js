// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}


const sophiaSecondaryLocation = data.Sophia.study[1].secondary[1].location;
// console.log('location is =', sophiaSecondaryLocation);

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

const findPeterburg = students[2222].address.city;
console.log(findPeterburg);
const findName = students[3333].name;
console.log(findName);


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

const findHabluderAdda = data2.data[0].bookDetails.name;
console.log(findHabluderAdda);


/// Practice problem task 1

const oddArray = [1, 3, 5, 7, 9];
// let evenArray = [];
// for (let i = 0; i < oddArray.length; i++) {
//     const element = oddArray[i];
//     const evenNumber = element + 1;
//     evenArray.push(evenNumber);
    
// }
// console.log(evenArray)


const evenArray = oddArray.map(i => i + 1);
console.log(evenArray);


const arr = [33, 50, 79, 78, 90, 101, 30];

const dividedByTen = arr.filter(i => i % 10 === 0);
console.log(dividedByTen);

const outputUsingFind = arr.find(i => i % 10 === 0)
console.log(outputUsingFind)


// Practice task 3 

const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
]

const seniorName = instructor.filter(t => t.position === 'Senior').map(i => i.name);
console.log(seniorName)

// for (let i = 0; i < instructor.length; i++) {
//     const element = instructor[i];
//     if(element.position === 'Junior'){
//         console.log(element.name);
//     }
// }

// practice 4

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

const getAgeSum = people.map(i =>i.age).reduce((acc, curr) => acc + curr, 0);
console.log(getAgeSum);

const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const nums = [1,2,3,4,5, 7, 9];
let output = nums.filter(n => n%2);
console.log(output);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product
console.log(price)


