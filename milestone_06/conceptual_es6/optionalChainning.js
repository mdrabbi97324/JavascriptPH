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

  console.log(dummyObject.contact);
  console.log(dummyObject.contact?.phone.address);
  