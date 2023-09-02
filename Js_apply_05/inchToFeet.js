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



    function inchesToFeet(inchesArray) {
        //Creating a new array to store the values in feet
        var feetArray = [];
        // Iterate through the input array
        for (var i = 0; i<inchesArray.length; i++) {
            //Convert inches to feet (1 foot = 12 inches)
            var feetValue = inchesArray[i] / 12;

            //Push the result into the feetArray
            feetArray.push(feetValue);
        }

        return feetArray;
    }

    var inchesValues = [150, 123, 33]; // An array with values in inches
    var feetValues = inchesToFeet(inchesValues);

    console.log(feetValues);     