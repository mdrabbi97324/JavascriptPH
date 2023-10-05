/* 
    8 ways to get undefined 
1. variable that is not initialize will give undefined
2. function with no return
3. Parameter that is not passed will be undefined
4. if return is nothing on the right side it will give undefined
5. property does not exists in an object will give output undefined;
6. accessing array  elements outside the index range it will show undefined;
7.should not remove array element using delete method instead of slice() array;
8. if you set a variable undefined it will give output undefined;
8.


*/

let first;


function second(a, b){
    const total =  a+b;
}

function third( a, b, c, d){
    const sum = a+b+c+d;
    // console.log(sum)
}

function noNegative (a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}


const fifth = {id: 2, name: 'ponchom', age: 40};


// const sixth = [22, 33, 44, 234, 44]
// delete sixth[0];
// console.log(sixth[0], sixth[4], sixth[7]);
// console.log(sixth)

const seventh = undefined;


const eight = null;
console.log(typeof eight)

const nine = {result: [], update: null}
console.log(typeof nine);



