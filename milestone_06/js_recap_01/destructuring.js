const actor = {
  name: "ananto",
  age: 30,
  phone: "017338879703",
  address: "Farmgate",
};

// const {name} = actor;
// console.log(name);

const { address } = actor;
console.log(address);

const myObject = {
  student: "Mike",
  teacher: "Susan",
};

const { student: pupil, teacher: prof } = myObject;

console.log(pupil, prof);

const { student, teacher } = myObject;
console.log(student, teacher);

const employee = {
  id: "007",
  name: "James",
  dept: "Spy",
};

/* const id = employee.id;
const name = employee.name;

const {id, name} = employee; */

// console.log(id, name);

const person = {
  x: 22,
  y: 33,
  z: 44,
  name: "solimudding",
  born: 1999,
};

const { ami, tumi, tini, ...others } = person;
// console.log(ami);
// console.log(tumi)
// console.log(tini)
// console.log(others);



