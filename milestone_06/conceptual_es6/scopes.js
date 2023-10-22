const x = 10;


// if(true) {
//     console.log(x);
// }


// {
//     const x = 20;
//     console.log('Inside of block', x)
// }

// console.log('Outside of block', x)

{
    var z = 5;
    z++;
    console.log('inside block',z);
}

console.log('Outside block', z)


function what(){
    var y = 10;
    y++
    console.log('inside y is', y)
} 
what()

// console.log('outside y is', y) // it give error because y is not defined 


