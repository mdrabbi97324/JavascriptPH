function getSumofAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    console.log(i, element, sum);
  }

  return sum;
}

const myNumbers = [129, 111, 560, 120, 68, 29];
// getSumofAnArray(myNumbers);

// practice 2

const values = [12, 24, 31, 29, 54, 57, 69];

function getOddNumbers(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
    //   console.log(index, element);
      oddNumbers.push(element);
    }
  }

  return oddNumbers;
}

const oddNumbers = getOddNumbers(values);
console.log(oddNumbers);

const oddNumberSum = getSumofAnArray(oddNumbers);
console.log('ODD NUM SUM :', oddNumberSum);

