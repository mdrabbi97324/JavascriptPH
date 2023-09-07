// convert hour Into minute

// function hourToMinute(number){
//     minutes =  number * 60;
//     return minutes;
// }
    


function isLeapYear(year) {
    // Leap years are divisible by 4, but not divisible by 100 unless divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  let yearArray = [2023, 2024, 2025, 2028, 2030];
  
  for (let i = 0; i < yearArray.length; i++) {
    if (isLeapYear(yearArray[i])) {
      console.log(yearArray[i] + " is a leap year.");
    } else {
      console.log(yearArray[i] + " is not a leap year.");
    }
  }



//   example 2

/* function isLeapYear(year) {
    // Leap years are divisible by 4, but not divisible by 100 unless divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  let yearArray = [2023, 2024, 2025, 2028, 2030];
  
  function findLeapYears(yearArray) {
    let leapYears = [];
    for (let i = 0; i < yearArray.length; i++) {
      if (isLeapYear(yearArray[i])) {
        leapYears.push(yearArray[i]);
      }
    }
    return leapYears;
  }
  
  let leapYears = findLeapYears(yearArray);
  console.log("Leap years in the array: " + leapYears.join(", "));
   */
  