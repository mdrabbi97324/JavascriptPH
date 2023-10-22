const students = [
    {name: 'mehedy bro', email: 'mehedy@gmail.com', avg:56, fiftyPercent:true},
    {name: 'rokib bro', email: 'rokib@gmail.com', avg: 57, fiftyPercent: false},
    {name: 'sakib bro', email: 'sakib@gmail.com', avg:42, fiftyPercent: false},
    {name: 'sojib bro', email: 'sojib@gmail.com', avg: 52, fiftyPercent: true},
    {name: 'sunny bro', email: 'sunny@gmail.com', avg: 32, fiftyPercent: false},
    {name: 'saki bro', email: 'saki@gmail.com', avg: 37, fiftyPercent: true},
    {name: 'jackie bro', email: 'jackie@gmail.com', avg: 57, fiftyPercent: true}
]


// avg >= 50 and fiftyPercent : true;


// console.log(students)

const scic = students.filter(student => student.avg >= 50 && student.fiftyPercent === true);
// console.log(scic)


// Get out each student email from scic
const scicEmail = scic.map(student => student.email);
// console.log(scicEmail)



// problem 2

const polapain = [
    {name: 'partho', job: 'sorkari', salary: 17000},
    {name: 'saikot', job: 'sorkari', salary: 20000},
    {name: 'ritchil', job: 'besorkari', salary: 55000},
    {name: 'mark', job: 'besorkari', salary: 22000},
    {name: 'anthony', job: 'sorkari',salary: 25000},
    {name: 'akash', job: 'besorkari', salary: 47000}
]

// sorkari hole >=20000 or besorkari hole >=40000;

const vaggoban = polapain.filter(pola => (pola.job === 'sorkari' && pola.salary >=20000) || (pola.job === 'besorkari' && pola.salary >=40000));
// console.log(vaggoban);

const polaNumber = Math.floor(Math.random()*vaggoban.length);
// console.log(vaggoban[polaNumber].name, 'Tumi jitsooo.....!');
const finalJamai = vaggoban[polaNumber].name;

// console.log(`${finalJamai} tumi jitsooo........!!`)


// problem 3

const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]

// {
//     ID01:"abul vai",
//     ID02: 'babul vai'
// }

let obj = {};
// obj.x = 'Hello';
// obj['age'] = 25;
// const propertyName = 'name';
// obj[propertyName] = 'Jalal Uddin'
// console.log(obj);


Persons.map(person => {
    // const id = person.id;
    // const name = person.name;
    // obj[id] = name;
    obj[person.id] = person.name;

})

// console.log(obj)


// const id = Persons[0].id;
// console.log(id)



// tips

const person = {
    name: "mehedy",
    age: 26
}

// const {name:myName} = person;
// console.log(myName)

function show({name, age}) {
    // const {name, age} = obj;
    // console.log(`My name is ${pass.name}. I am ${pass.age} years old`)
    // console.log(`My name is ${name}. I am ${age} years old`)
    console.log(`My name is ${name}. I am ${age} years old`)
}

show(person)



