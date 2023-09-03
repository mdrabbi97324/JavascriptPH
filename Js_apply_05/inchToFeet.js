// const dadaInch = 144;
// const dadaFeet = dadaInch / 12;
// console.log('Dada Height =', dadaFeet ,'Feet');

// function height(inch) {
//     let feet = inch / 12;
//     return feet;
// }

// console.log(height(122));

// const dadiInch = 120;
// const dadiFeet = dadiInch / 12;
// console.log('Dadi Feet :', dadiFeet);

// function inchToFeet(inch) {
//     const feet = inch / 12;
//     return feet ;
// }

// const dadaInch = 144;
// const dadaFeet = inchToFeet(dadaInch);
// console.log('Dada Feet :', dadaFeet);

// const nanaInch = 168;
// const nanaFeet = inchToFeet(nanaInch);
// console.log('Nana Feet :', nanaFeet);




// function height(num1, num2, num3) {
    //     let feet = num1 / 12;
    //     return feet;
    
    // }
    
    // console.log(height(heights));
    
    /* var heights = [ 150, 123, 33];
    
    console.log();
    
    function convertInchsToFeets(heights) {
        
        return heights;
    } */



    
    
/*     function isLeapYear(year) {
        const remainder = year % 4;
        if (remainder === 0) {
            return true;
        }

        else {
            return false;
        }
    }

let myYearIsLeapYear = isLeapYear(2002);
console.log(myYearIsLeapYear); */

/* function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
// const year = prompt(2020);

checkLeapYear(2024); */

var inchesValues = [150, 123, 33];

function inchesToFeets(inchesArray) {
    var feetArray = [];
    for (var i = 0; i<inchesArray.length; i++) {
        var feetValue = inchToFeet(inchesArray[i])  ;
        feetArray.push(feetValue);
    }

    return feetArray;
}

var feetValues = inchesToFeets(inchesValues);

console.log(feetValues); 

function inchToFeet(inch) {
    return  inch / 12 ;
}

console.log(inchToFeet(12));