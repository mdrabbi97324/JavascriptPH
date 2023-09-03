const totalMarks = [40, 43, 49, 52, 56, 64, 78, 83, 85];

function getEvenNum(numbers) {
    let evenNumArray = [];
    for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(i, element);
    if (element % 2 === 0) {
    //   console.log(i, element);
      evenNumArray.push(element);
    }
  }
  return evenNumArray;
}

const evenNumbers = getEvenNum(totalMarks);
console.log(evenNumbers);



function evenNumSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element
        // console.log(sum);
    }

    return sum;
    
}

// evenNumSum(totalMarks)
const sum = evenNumSum(evenNumbers);
console.log(sum);
