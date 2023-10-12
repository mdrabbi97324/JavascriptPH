const x = 114;

// if(x>10){
//     console.log('x is greater than 10')
// } else {
//     console.log('x is less than 10')
// }


x > 10 ? console.log('x is greater than 10') : console.log('x is less than 10');



const sensorData = [10, 15, 20, 25, 30];

const average = sensorData.reduce((sum, value, index, array) => {
    sum += value;
    if (index === array.length-1) {
        return sum / array.length;
    } else {
        return sum;
    }
}, 0);

console.log(average);