const actor = {
    name: 'ananto',
    age: 30,
    phone: '017338879703',
    address: 'Farmgate'
}

// const {name} = actor;
// console.log(name);

const {address} = actor;
console.log(address);

const myObject = {
    student: 'Mike',
    teacher: 'Susan'
}

const {student: pupil, teacher: prof} = myObject;

console.log(pupil, prof)



const {student, teacher} = myObject;
console.log(student, teacher);

const employee = {
    id: '007',
    name: 'James',
    dept: 'Spy'
}

const id = employee.id;
const name = employee.name;

const {id, name} = employee;

// console.log(id, name);

