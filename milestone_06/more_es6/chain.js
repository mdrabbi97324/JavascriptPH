const people = [
    {
      id: 1,
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001',
      },
    },
    {
      id: 2,
      name: 'Alice',
      age: 25,
      address: {
        street: '456 Elm St',
        city: 'Los Angeles',
        zipCode: '90001',
      },
    },
    {
      id: 3,
      name: 'Bob',
      age: 35,
      address: {
        street: '789 Oak St',
        city: 'Chicago',
        zipCode: '60601',
      },
    },
  ];

  console.log(people[2].address.city);



  const company = {
    name: 'Acme Corporation',
    employees: [
      {
        id: 1,
        name: 'John Doe',
        departments: ['HR', 'Finance'],
        contact: {
          email: 'john@example.com',
          phone: '555-123-4567',
        },
      },
      {
        id: 2,
        name: 'Alice Smith',
        departments: ['Engineering'],
        contact: {
          email: 'alice@example.com',
          phone: '555-987-6543',
        },
      },
      {
        id: 3,
        name: 'Bob Johnson',
        departments: ['Marketing', 'Sales'],
        contact: {
          email: 'bob@example.com',
          phone: '555-789-0123',
        },
      },
    ],
    headquarters: {
      city: 'New York',
      address: '123 Main St',
    },
  };
  
//   const berkoro = Object.entries(company);
  console.log(company.employees[2].departments[1])
  // Now, you can practice chaining to access and manipulate data within this nested structure.


const user2 = {
    name: 'alice',
    address: {
        city:'Dhaka',
    }
}

const cityName = user2.address?.city;
console.log(cityName);  
const streetName = user2.address.street;
console.log(streetName);

