//1. feet to Inch
function feetToInch(number){
    return 12 * number;
}

const result = feetToInch(1);
console.log('Inches :', result);



//2. centimeter to meter
function   centimeterToMeter(number){
    return number / 100;
}

const output = centimeterToMeter(1500);
console.log('Meter :', output);

// 3.count paper 
// book1 ---> 100
// book2 ---> 200
// book3 ---> 300

function  paperRequirment(num1, num2, num3) {
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    return (book1 * num1) + (book2 * num2) + (book3 * num3);
} 

const totalPaper = paperRequirment(2, 5, 10);
console.log('Total Paper :', totalPaper);


// 4. ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'Chinku']
const friends = ['baijid', 'mamun', 'kamal', 'jubayer bin rased', 'Chinku']

// I have this array I want to an output which give me the largest name as output

function  bestFriend(friend){
    let largest = friend[0]
    for (let i = 0; i < friend.length; i++) {
        const element = friend[i];
        if (element.length > largest.length) {
            largest = element;
        }
        
    }
    return largest;
}

const myBestFriend = bestFriend(friends)
console.log('My best friend name is', myBestFriend);


 // 5. [45, 87, 96, 11, 63, -56, 71, 28]
const numbers = [45, 20, -87, 96,20, 26, 11, 63, 56, -56, 71, 28];
// I have this array i want onlyPositive numbers but if it has any negetive value the loop is break instantly

function onlyPositive(number){
    let positive = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if(element % 2 == 0  || element < 0) {
            if (element < 0) {
                break;
            }
            else {
                positive.push(element);
            }
        }
    }
    return positive;
}

const positiveNumber = onlyPositive(numbers);
console.log(positiveNumber);

const nayoks=["Bangla Bhai","English Bhai","Korean Bhai ","Turkish Bhai "] ;

for (const nayok of nayoks) {
    console.log(nayok);
}

// What will be the final value of the sum? 

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum);



  

