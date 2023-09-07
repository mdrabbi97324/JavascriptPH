// let arrayOfObject = [
//   { name: john, age: 29},
// ];

// let heights = [ {Name : Dada, Height: 144}, {Name: Baba, Height: 132}, {Name: Son, Height: 96} ];

// console.log(arrayOfObject);
// var element = arrayOfObject[0];
// console.log(element);


// example 1 way

function convertToFeet(heightInInches) {
  return heightInInches / 12;
}

let heights = [
  { name: "Dada", height: 144, qualification: {level: 'H.S.C', grade: 'A'}  },
  { name: "Baba", height: 132, qualification: {level: 'S.S.C', grade: 'A+'} },
  { name: "Son", height: 96, qualification: {level: 'BSc', grade: 3.8} }
];

function convertHeightsToFeet(heightsArray) {
  let heightsInFeet = [];
  for (let i = 0; i < heightsArray.length; i++) {
    let person = heightsArray[i];
    let heightInFeet = convertToFeet(person['height']);
    let qualificationInfo = `Qualification is : ${person.qualification.level}, ${person.qualification.grade}`;
    heightsInFeet.push(
        ` ${person['name']}'s height is : ${heightInFeet} Feet, Qualification is : ${qualificationInfo} `
      );
    // heightsInFeet.push({ Name: person['Name'], Height: heightInFeet });
  }
  return heightsInFeet;
}

let heightsInFeet = convertHeightsToFeet(heights);
console.log(heightsInFeet);



// Dada's height is : 12 Feet, Qualification is : HSC, A+
// Baba's height is : 11 Feet 
// Son's height is : 8 Feet 


// example 2 way 











